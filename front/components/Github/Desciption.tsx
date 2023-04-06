import { descriptionStyle, titleStyle } from "../../styles/styles";

export default function Description({ title, description, hideBreak = false }): JSX.Element {
  return (
    <>
      <h1 className={titleStyle}>{title}</h1>
      <p className={descriptionStyle}>{description}</p>
      {!hideBreak && <hr />}
    </>
  )
}