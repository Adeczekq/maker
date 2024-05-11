import FreeIcon from "./../assets/icon-free.svg"
import IconPaid from "./../assets/icon-paid.svg"
import IconCheck from "./../assets/icon-check.svg"
import IconCheck2 from "./../assets/icon-check-second.svg"

function PricePanels() {
  return (
    <div className="flex flex-col gap-24 items-center xl:flex-row xl:justify-center">
      <div className=" flex flex-col bg-secondary p-9 rounded-xl gap-4 max-w-96">
        <img className="w-12 -mt-14 " src={FreeIcon} />
        <span className="text-lg font-extrabold text-white ">Dip your toe</span>
        <p className="text-grey">
          Just getting started? No problem at all! Our free plan will take you a
          long way.
        </p>
        <span className="text-4xl font-extrabold text-white">Free</span>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center">
            <img className="w-3 h-2 " src={IconCheck} />
            <span className="text-white">Unlimited products</span>
          </div>
          <div className="flex gap-5 items-center">
            <img className="w-3 h-2 " src={IconCheck} />
            <span className="text-white">Basic analytics</span>
          </div>
          <div className="flex gap-5 items-center">
            <img className="w-3 h-2 " src={IconCheck} />
            <span className="text-white">Limited marketplace exposure</span>
          </div>
          <div className="flex gap-5 items-center">
            <img className="w-3 h-2 " src={IconCheck} />
            <span className="text-white">10% fee per transaction</span>
          </div>
        </div>
      </div>
      <div className=" flex flex-col bg-primary p-9 rounded-xl gap-4  max-w-96">
        <img className="w-12 -mt-16 " src={IconPaid}/>
        <span className="text-lg font-extrabold text-background ">
          Dive right in
        </span>
        <p className="text-background">
          Ready for the big time? Our paid plan will help you take your business
          to the next level.
        </p>
        <span className="text-4xl font-extrabold text-background flex items-center gap-3">
          $25.00<span className="text-base font-medium">/month</span>
        </span>
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center">
            <img className="w-3 h-2 " src={IconCheck2} />
            <span className="text-background">Custom domain</span>
          </div>
          <div className="flex gap-5 items-center">
            <img className="w-3 h-2 " src={IconCheck2} />
            <span className="text-background">
              Advanced analytics and reports
            </span>
          </div>
          <div className="flex gap-5 items-center">
            <img className="w-3 h-2 " src={IconCheck2} />
            <span className="text-background">High marketplace visibility</span>
          </div>
          <div className="flex gap-5 items-center">
            <img className="w-3 h-2 " src={IconCheck2} />
            <span className="text-background">5% fee per transaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePanels;
