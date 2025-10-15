import { useEffect } from 'react';
import { useMetrics } from '../../context/metrics/useMetrics';

import MetricsCard from './metricsCard';
import Loader from './loader';
import ErrorState from './error';
import type {
  LanguageMetricsResponse,
  MetricsSummary,
} from '../../types/Metrics/Metrics';

export interface Metric {
  label: string;
  value: string;
  detail: string;
  percentage: number;
}

export default function MetricsContainer() {
  const { state, fetchLanguages, fetchSummary } = useMetrics();
  const { loading, data: languageData, error } = state.languages;

  const {
    loading: summaryLoading,
    data: summaryData,
    error: summaryError,
  } = state.summary;

  useEffect(() => {
    fetchLanguages();
  }, [fetchLanguages]);
  console.log(languageData);

  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);

  if (loading || !languageData || summaryLoading || !summaryData)
    return <Loader />;

  if (error || summaryError)
    return (
      <ErrorState
        message={
          error || summaryError || 'Something went wrong. Please try again.'
        }
        onRetry={() => {
          fetchLanguages(true);
          fetchSummary(true);
        }}
      />
    );

  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();

  function transformLanguageMetric(
    languageData: LanguageMetricsResponse
  ): Metric {
    const percentageConverted = Math.round(
      languageData.data.summary.percentage
    );
    return {
      label: 'LANGUAGE (MOST USED)',
      detail: `${languageData.data.summary.mostUsed}`,
      value: `${percentageConverted}%`,
      percentage: percentageConverted,
    };
  }

  function transformActivityMetric(activityData: MetricsSummary): Metric {
    return {
      label: 'ACTIVITY',
      detail: 'Days active this month',
      value: `${activityData.activity.activeDaysThisMonth} days`,
      percentage: Math.round(
        (activityData.activity.activeDaysThisMonth / daysInMonth) * 100
      ),
    };
  }

  function transformLongestStreakMetric(streakData: MetricsSummary): Metric {
    return {
      label: 'LONGEST STREAK',
      detail: 'Most streak days',
      value: `${streakData.activity.longestStreak} days`,
      percentage: Math.min(streakData.activity.longestStreak, 100),
    };
  }

  const languageMetrics = transformLanguageMetric(languageData);
  const activityMetrics = transformActivityMetric(summaryData);
  const streakMetrics = transformLongestStreakMetric(summaryData);

  const metrics = [languageMetrics, activityMetrics, streakMetrics];
  console.log(metrics);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 bg-neutral-50 overflow-hidden'>
      {metrics.map((item) => (
        <MetricsCard key={item.label} data={item} />
      ))}
    </div>
  );
}
