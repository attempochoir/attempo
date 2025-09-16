
export function Button({ children, className='', variant='solid', ...props }){
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition';
  const styles = variant==='outline' ? 'border border-slate-300 hover:bg-slate-50' : 'bg-slate-900 text-white hover:opacity-90';
  return <button className={base + ' ' + styles + ' ' + className} {...props}>{children}</button>;
}
