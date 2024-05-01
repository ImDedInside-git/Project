import WidgetWrapper from "components/WidgetWrapper";
import AddFlights from "scenes/widgets/Admin/AddFlights.jsx";


const CreateFlightWidget = () => {
  return (

    <WidgetWrapper>
      {/* <b>Create Flight (ADMIN)</b> */}
      <AddFlights />
    </WidgetWrapper>
  )
}

export default CreateFlightWidget;