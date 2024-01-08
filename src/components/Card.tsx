import type { Coffee } from "../types";

export function Card({ item }: { item: Coffee }) {
  const { image, name, price, popular } = item;
  return (
    <article className="max-w-[400px] md:max-w-[260px] p-2 flex gap-2 flex-col relative mx-auto">
      {popular && (
        <div>
          <span className="bg-[#F6C768] text-[#111315] rounded-xl font-semibold text-xs py-1 px-2 absolute top-6 left-4">Popular</span>
        </div>
      )}
      <img src={image} alt={name} className="rounded-md" />
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="bg-[#BEE3CC] text-[#111315] rounded-lg px-2 font-semibold text-sm flex items-center">{price}</p>
      </div>
      <div>
        <div className="flex justify-between">
          {item.rating > 0 ? (
            <>
              <div className="flex gap-1">
								<img src="/Star_fill.svg" alt="star" />
								<p>{item.rating} <span className="text-[#6F757C] font-semibold">({item.votes} votes)</span></p>
							</div>
            </>
          ) : (
            <>
              <div className="flex gap-1">
								<img src="/Star.svg" alt="star" />
								<p>No ratings</p>
							</div>
            </>
          )}
					{!item.available ? <p className="text-[#ED735D] font-semibold" >Sold Out</p> : <></>}
        </div>
      </div>
    </article>
  )
}