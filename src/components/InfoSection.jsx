import Item from "./Item"
import Passions from './../assets/illustration-passions.svg'
import Freedom from './../assets/illustration-financial-freedom.svg'
import Lifestyle from './../assets/illustration-lifestyle.svg'
import Work from './../assets/illustration-work-anywhere.svg'
function InfoSection() {
  return (
    <div className="flex flex-col gap-12 xl:flex-row xl:items-center xl:justify-center  ">
      <Item
        imgSrc={Passions}
        title="Indulge your passions"
        desc="Your passions shouldn't be just for the weekend. Earn a living doing what you love."
      />
      <Item
        up="xl:translate-y-14 md:-translate-x-14 xl:translate-x-0"
        imgSrc={Freedom}
        title="Gain financial freedom"
        desc="Start making money work for you. There’s nothing quite like earning while you sleep. "
      />
      <Item
        imgSrc={Lifestyle}
        title="Choose your lifestyle"
        desc="Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."
      />
      <Item
        up="xl:translate-y-14 md:-translate-x-14 xl:translate-x-0"
        imgSrc={Work}
        title="Work from anywhere"
        desc="Selling online means not being pinned down. Want to work AND travel? Go for it!"
      />
    </div>
  );
}

export default InfoSection;
