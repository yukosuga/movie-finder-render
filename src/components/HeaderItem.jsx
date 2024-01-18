function HeaderItem({name, Icon}) {
  return (
    <div className="text-white flex items-center gap-3 text-[18px] cursor-pointer hover:underline underline-offset-2 mb-1">
        <Icon />
        <h2 className="">{name}</h2>
    </div>
  )
}

export default HeaderItem