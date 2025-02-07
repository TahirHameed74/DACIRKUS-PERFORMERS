import { useCharacter } from "@/providers/CharacterProvider"
import { useSheetRenderer } from "@/providers/SheetRendererProvider"
import SheetModel from "../SheetModel"

const SheetRenderer = () => {
  const { cType, cSkin, cAcc, cEye, cHair, cColor, cOutFit, dummyRandom } = useCharacter()
  const { singleSheetRef, multipleSheetRefs } = useSheetRenderer()

  return (
    <main
      className="fixed w-screen h-screen left-0 top-0 z-[-1000] sheet-renderer
        flex flex-wrap"
    >
      <div className="relative w-full h-full">
        <div className="absolute w-full h-full bg-[#239063] z-[100]" />
        <div className="w-fit h-fit" ref={singleSheetRef}>
          <SheetModel
            type={cType}
            skin={cSkin}
            acc={cAcc}
            eye={cEye}
            hair={cHair}
            color={cColor}
            outfit={cOutFit}
          />
        </div>
        {dummyRandom?.map((randomdata, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="w-fit h-fit" ref={multipleSheetRefs[i]} key={i}>
            <SheetModel
              type={randomdata.type}
              skin={randomdata.skin}
              acc={randomdata.acc}
              eye={randomdata.eye}
              hair={randomdata.hair}
              color={randomdata.color}
              outfit={randomdata.outfit}
            />
          </div>
        ))}
      </div>
    </main>
  )
}

export default SheetRenderer
