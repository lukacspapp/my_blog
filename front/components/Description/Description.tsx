import { descriptionStyle, titleStyle } from "../../styles/styles";
import { Description } from "../../types/portfolioTypes";



export default function Description({ title, description, hideBreak = false }: Description): JSX.Element {
  return (
    <>
      <h1 className={titleStyle}>{title}</h1>
      <p className={descriptionStyle}>{description}</p>
      {!hideBreak && <hr />}
    </>
  )
}