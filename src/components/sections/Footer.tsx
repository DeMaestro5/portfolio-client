export default function Footer() {
  return (
    <footer className='pt-8 sm:pt-10 pb-6 sm:pb-8 text-center border-t border-stone-200 '>
      <p className='text-[10px] sm:text-[11px] text-neutral-500 tracking-[1.5px] font-medium uppercase'>
        &copy; {new Date().getFullYear()} OSSIAKEME STEPHEN. All rights
        reserved.
      </p>
    </footer>
  );
}
