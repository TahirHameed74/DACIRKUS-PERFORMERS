import { ZORA_COLLECTION_URL } from "@/lib/consts"
import { useCreate } from "@/providers/CreateProvider"
import Zorb from "../Zorb"

const ZoraButton = () => {
  const { mintedTokenId } = useCreate()

  const handleClick = () => {
    window.open(`${ZORA_COLLECTION_URL}/${mintedTokenId}`, "_blank")
  }

  return (
    <button
      type="button"
      className="md:w-[39px] lg:w-[52px] xl:w-[65px] aspect-[1/1] border-[2px] border-black flex justify-center items-center
                    bg-[#626975] active:bg-[#4e545d] shadow-[inset_0px_-3px_0px_1px_#323840] active:shadow-[inset_none] rounded-[5px]"
      onClick={handleClick}
    >
      <Zorb width={45} height={45} />
    </button>
  )
}

export default ZoraButton
