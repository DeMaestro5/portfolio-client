export default function Footer() {
  return (
    <footer className='pt-[80px] pb-[40px] text-center border-t-1 border-stone-200 '>
      <p className='text-[11px] text-neutral-500 tracking-[1.5px] font-medium uppercase'>
        &copy; {new Date().getFullYear()} OSSIAKEME STEPHEN. All rights
        reserved.
      </p>
    </footer>
  );
}
