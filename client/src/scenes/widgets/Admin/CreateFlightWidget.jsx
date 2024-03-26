import WidgetWrapper from "components/WidgetWrapper";
import AddFlights from "scenes/widgets/Admin/AddFlights.jsx";


const CreateFlightWidget = () => {
  return (

    <WidgetWrapper>
      <b>Create Flight (ADMIN)</b>
      <br /><br />
      <AddFlights />
    </WidgetWrapper>
  )
}

export default CreateFlightWidget;