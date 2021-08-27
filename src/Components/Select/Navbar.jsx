import styles from "./Select.module.css"


function SelectNavbar() {
    return <>
        <div className={ styles.navbarmaindiv}>
            <button>Rooms</button>
            <button>Facilities</button>
            <button>Reviews</button>
            <button>Childrens and extra beds</button>
        </div>
    </>
}

export { SelectNavbar }