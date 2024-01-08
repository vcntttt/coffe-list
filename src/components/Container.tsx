import { useEffect, useMemo, useState } from "react"
import type { Coffee, FilterValue } from "../types.d.ts"
import { Card } from "./Card.tsx"
import { Filter } from "./Filter.tsx"
import { FILTERS } from "../consts.ts"

export function Container() {
  const [data, setData] = useState<Coffee[]>([])
  const [filterSelected, setFilterSelected] = useState<FilterValue>(FILTERS.ALL)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const onFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter)
  }
  const filteredCoffees = useMemo(() => {
    return data?.filter(item => {
      if (filterSelected === FILTERS.AVAILABLE) return item.available
      else return item
    })
  },[data, filterSelected])

  return (
    <>
      <Filter filterSelected={filterSelected} onFilterChange={onFilterChange}/>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-10 gap-y-8 gap-x-10">
        {filteredCoffees?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </section>
    </>
  )
}
