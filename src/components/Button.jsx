import React from 'react'

const Button = ({title,link}) => {
  return (
    <div>
      <button>
            <a
              href={link}
              className="mt-8 px-6 py-3 bg-gradient-to-br from-[#013c36] via-[#0180a7] to-black text-[#0ffbfd] rounded-xl hover:border-[#0ffbfd] border-[1px] border-x-[#0ffbfd] border-y-[#00577e] cursor-pointer"
            >
              {title}
            </a>
          </button>
    </div>
  )
}

export default Button
