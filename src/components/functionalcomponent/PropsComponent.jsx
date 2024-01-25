import "../../css/PropsComponent.css"
function PropsComponent(props,){
    //const styleAttrs={"backgroundColor":"brown",color:"white"} //internal
    return (
        <div>
        {/* <div style={styleAttrs} //calling internal */}
         {/* <div style={{"backgroundColor":"brown",color:"white"}}>//inline */}
            Hello,{props.name} <br></br>We are learning {props.course} class
        </div>
    )
}
export default PropsComponent;