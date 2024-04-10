const Benefits = () => {
  return (
    <>
      <div className="">
        <h1 className="text-5xl font-bold justify-center flex pt-5">Millets Benefits Pointer For You</h1>
        <h2 className="text-lg font-semibold justify-center flex pt-2">Explore the World of Millets. Healthy for you! Healty for Plants</h2>
      </div>
      <div className="flex">
        {/* card 1 */}
        <div className="my-32 mx-12">
          <div className="w-[250px] px-4 py-2">
            <span className="w-full justify-center flex">
              <img src="/public/assets/vector/badge1.jpg" alt="vector-1"  className="h-32 rounded-full border-2 border-zinc-900"/>
            </span>
            <h1 className="flex justify-center w-full font-semibold text-lg">Rich in nutrients</h1>
            <p className="flex text-center">Millets are a good source of protein, fiber, complex carbohydrates, vitamins, and minerals </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="my-32 mx-16">
          <div className="w-[250px] px-4 py-2">
            <span className="w-full justify-center flex">
              <img src="/public/assets/vector/badge2.jpg" alt="vector-1"  className="h-32 rounded-full border-2 border-zinc-900"/>
            </span>
            <h1 className="flex justify-center w-full font-semibold text-lg">Gluten-free</h1>
            <p className="flex text-center">Perfect for people with celiac disease or gluten sensitivity</p>
          </div>
        </div>
        {/* card 3 */}
        <div className="my-32 mx-16">
          <div className="w-[250px] px-4 py-2">
            <span className="w-full justify-center flex">
              <img src="/public/assets/vector/badge3.jpg" alt="vector-1"  className="h-32 rounded-full border-2 border-zinc-900"/>
            </span>
            <h1 className="flex justify-center w-full font-semibold text-lg">manage diabetes </h1>
            <p className="flex text-center">Millets have a slow glycemic index, which can help regulate blood sugar levels</p>
          </div>
        </div>
        {/* card 4 */}
        <div className="my-32 mx-16">
          <div className="w-[250px] px-4 py-2">
            <span className="w-full justify-center flex">
              <img src="/public/assets/vector/badge4.jpg" alt="vector-1"  className="h-32 rounded-full w-[130px] border-2 border-zinc-900"/>
            </span>
            <h1 className="flex justify-center w-full font-semibold text-lg">Good antioxidants</h1>
            <p className="flex text-center">Millets contain antioxidants that can help protect your cells from damage</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benefits