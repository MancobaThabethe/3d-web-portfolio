import CountUp from "react-countup"
import { counterItems } from "../constants"

function AnimatedCounter() {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid grid-4-cols">
        {
          counterItems.map(item => (
            <div className="bg-zinc-900 rounded-lg p-10 flex flex-col mb-2">
            <div key={item.label} className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp suffix={item.suffix} end={item.value} duration={2} />
            </div>
            <div className="text-white-50 text-lg font-medium">
              {item.label}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default AnimatedCounter