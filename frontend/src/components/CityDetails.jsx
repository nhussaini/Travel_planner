
export default function CityDetails (props){
    //console.log("propss", props.locationData.attributes.long_name)

    if (props.locationData) {
        console.log("test props", props.locationData.attributes)
    } 
return (
<div>
    City Details
    <p>Where: 
        {/* <span>{props.locationData.attributes.population}</span> */}
    </p>
</div>
)
}