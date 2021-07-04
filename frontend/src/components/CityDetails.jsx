
export default function CityDetails (props){

return (
<div>
    City Details
    <p>Where: 
        <span>{props.locationData.attributes.long_name}</span>
    </p>
</div>
)
}