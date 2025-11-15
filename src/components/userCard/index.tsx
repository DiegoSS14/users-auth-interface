
export default function UserCard() {
  return (
    <div
      className='
        flex 
        items-center 
        justify-between
        outline-[1px] outline-gray-800 
        rounded-lg p-3 
        transition-all 
        duration-200 
        hover:bg-[#27009134]
        active:bg-gray-900
        active:duration-500
        cursor-pointer
        '
    >
      <section className="flex items-center gap-3">
        <img
          className='w-16 h-16 object-cover rounded-full'
          src='https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000'
        />
        <div className='flex flex-col'>
          <h1 className='text-[16px] font-bold'>
            Name Person
          </h1>
          <h3 className='text-[13px]'>
            Role
          </h3>
        </div>
      </section>
      <button
        className='
          text-[13px] 
          rounded-md 
          outline-1 
          px-4 h-8 
          outline-violet-800
          cursor-pointer
          transition-all
          duration-200
          hover:bg-violet-800
          hover:text-white
          active:bg-linear-90 from-teal-200 to-violet-200
          active:duration-600
          active:text-gray-800
      '>
        Ver perfil
      </button>
    </div>
  )
}