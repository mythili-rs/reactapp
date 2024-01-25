function PropsComponent(Props){
    return[
        <div>
           <p> Hello,{Props.name}</p>
           <p>This is MERN class in {Props.course}</p>
        </div>
    ]
}
export default PropsComponent