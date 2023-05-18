import { descriptionStyle, titleStyle } from "../../styles/styles";
import { DescriptionType } from "../../types/portfolioTypes";



export default function Description({ title, description, hideBreak = false } : DescriptionType) {
  return (
    <>
      <h1 className={titleStyle}>{title}</h1>
      <p className={descriptionStyle}>{description}</p>
      {!hideBreak && <hr />}
    </>
  )
}