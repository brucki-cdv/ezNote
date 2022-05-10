import ListedItems from "../ListedItems/ListedItems";
import ListItem from "../ListedItems/ListItem";

import apiService from "../../Services/api.service";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsCircleFill } from "react-icons/bs";

export default function TagsList(second) {
  const { isTagsExpanded, sidebarReload, isSidebarHidden } = useSelector(
    (state) => state.sidebar
  );
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const getTags = async () => {
    await apiService.getTags().then((val) => {
      setTags(val.data.tags);
    });
  };

  const showByTag = (filterValue, filterId) => {
    dispatch({
      type: "SHOW_BY_TAG",
      payload: { filterValue: filterValue, filterId: filterId },
    });
  };

  useEffect(() => {
    getTags();
    return () => {
      dispatch({ type: "SIDEBAR_RESET_RELOAD" });
    };
  }, [sidebarReload]);

  return (
    <ListedItems isHidden={!isTagsExpanded || isSidebarHidden}>
      {tags.map((tag) => {
        return (
          <ListItem onClick={() => showByTag(tag.name, tag._id)}>
            {" "}
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <BsCircleFill size={15} color={tag.hexColor} />
              {tag.name}
            </div>
          </ListItem>
        );
      })}
    </ListedItems>
  );
}
