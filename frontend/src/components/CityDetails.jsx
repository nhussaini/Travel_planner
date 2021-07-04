
export default function CityDetails (props){
console.log("props test", props.locationData.attributes)
return (
<div>
    City Details
    <p>Where: 
        {/* <span>{props.locationData.attributes.population}</span> */}
    </p>
</div>
)
}