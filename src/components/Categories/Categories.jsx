import Category from "./Category/Category";
import allCategoriesAPI from "../../APIs/allCategoriesAPI";

const Categories = () => {
    let i = 1;
    return (
        <div className="container all_categories mb-5">
            <div className="row">
                {
                    allCategoriesAPI.map((ele, ind) => {
                        return (
                            <Category Data={ele} Index={i++} key={ind} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Categories