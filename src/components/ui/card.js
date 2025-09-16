
export function Card({ children, className='' }){
  return <div className={'bg-white border border-slate-200 rounded-xl ' + className}>{children}</div>
}
export function CardContent({ children, className='' }){
  return <div className={className}>{children}</div>
}
