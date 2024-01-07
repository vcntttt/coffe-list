import type { FilterValue } from '../types'
import { FILTERS_BTNS } from '../consts'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export function Filter({filterSelected, onFilterChange}: Props) {
  return (
        <ul className='flex gap-4 p-2 px-8 items-center justify-center '>
          {
            Object.entries(FILTERS_BTNS).map(([key, { text }]) => {
              const isSelected = key === filterSelected
              const className = isSelected ? 'bg-[#6F757C]' : ''
              return (
                <li
                  key={key}
                  className='cursor-pointer'
                >
                  <button
                  className={`${className} rounded-md p-2 px-4 font-semibold`}
                  onClick={(event) => {
                    event.preventDefault()
                    onFilterChange(key as FilterValue)
                  }}
                  >
                    {text}
                  </button>
                </li>
              )
            }
            )}
        </ul>
      )
}
