const Screenshots = ({ images }) => {
  console.log(images.desktop);
  return (
    <>
      <div className="dtop">
        {images.desktop.map((d, i) => {
          return (
            <figure key={i}>
              <img src={d} alt="desktop" />
            </figure>)
        })}
      </div>
      <div className="mobile">
        {images.mobile.map((m, i) => {
          return(
            <figure key={i}>
              <img src={m} alt="mobile" />
            </figure>
          )
        })}
      </div>
    </>
  )
}

export default Screenshots;