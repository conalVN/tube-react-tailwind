import { memo } from "react";
import moment from "moment";

function DescriptionVideo({ data }) {
  function htmlDecode(content) {
    let e = document.createElement("pre");
    e.innerHTML = content;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }
  return (
    <section className="bg-gray-200 rounded-md p-2">
      <p className="flex gap-2">
        <span className="font-medium">
          {new Intl.NumberFormat("en-US").format(data?.statistics?.viewCount)}{" "}
          lượt xem
        </span>
        <span className="font-medium">
          {moment(data?.snippet?.publishedAt).format("ll")}
        </span>
      </p>
      <div
        className=""
        dangerouslySetInnerHTML={{
          __html: htmlDecode(data?.snippet?.description),
        }}
      ></div>
    </section>
  );
}

export default memo(DescriptionVideo);
