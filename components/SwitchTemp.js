import Switch from "react-switch"

const SwitchTemp = props => (
  <Switch
    checked={props.celciusChecked}
    offColor="#E1E1E1"
    onColor="#E1E1E1"
    offHandleColor="#FDFDFD"
    onHandleColor="#FDFDFD"
    height={30}
    width={80}
    onChange={props.handleTempChoice}
    checkedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          color: "black",
          paddingRight: 2
        }}
      >
        °C
      </div>
    }
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          color: "black",
          paddingRight: 2
        }}
      >
        °F
      </div>
    }
    className="react-switch"
    id="icon-switch"
  />
)

export default SwitchTemp