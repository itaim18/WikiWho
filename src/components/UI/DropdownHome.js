import Dropdown from "react-bootstrap/Dropdown";
import styles from "./DropdownHome.module.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
function DropdownHome() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle style={{ background: "transparent", border: "none" }}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </Dropdown.Toggle>

        <Dropdown.Menu className={styles.menu}>
          <Dropdown.Item active>
            <h3>
              <BsFillCaretLeftFill />
              Merch
            </h3>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <h3>
              <BsFillCaretLeftFill />
              Hubs
            </h3>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <h3>
              <BsFillCaretLeftFill />
              Episodes
            </h3>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <h3>Contact</h3>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default DropdownHome;
