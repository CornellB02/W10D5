import { NavLink } from "react-router-dom";

 const GalleryNavigation = () => {
    let gallery = this.props
    console.log(gallery)
    return  (<div>
        {gallery.map((ele) => (
            <h2>ele</h2>
        ))}
    </div>)
}

export default GalleryNavigation;