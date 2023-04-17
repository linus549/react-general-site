import Grid from "components/styled/Grid";
import DownloadCard from "components/Download/DownloadCard";
import { ReactComponent as BoxIcon } from "assets/icons/box.svg";
import { ReactComponent as CodeIcon } from "assets/icons/code-slash.svg";
import { ReactComponent as SquareIcon } from "assets/icons/bounding-box-circles.svg";

function Download() {
  return (
    <>
      <h1>Download</h1>

      <Grid as="ul" $columns={2}>
        {downloadItems.map((download) => (
          <li key={download.name}>
            <DownloadCard
              icon={download.icon}
              title={download.name}
              description={download.description}
              features={download.features}
              url={download.url}
            />
          </li>
        ))}
      </Grid>
    </>
  );
}

const downloadItems = [
  {
    icon: <BoxIcon />,
    name: "Name 8.4.2",
    description:
      "Laoreet suspendisse interdum consectetur libero id faucibus nisl.",
    features: [
      "Client-server architecture",
      "Data format",
      "Compilation",
      "Code-splitting optimization",
    ],
    url: "#",
  },
  {
    icon: <CodeIcon />,
    name: "Name x.y.z",
    description: "Mauris sit amet massa vitae tortor condimentum lacinia quis.",
    features: ["Call stack", "Browser Web API", "Big O notation"],
    url: "#",
  },
  {
    icon: <SquareIcon />,
    name: "Name a.b.c",
    description:
      "Fusce ut placerat orci nulla pellentesque dignissim enim. Molestie a iaculis at erat.",
    features: [
      "Assembly language",
      "Software design pattern",
      "HTTP request",
      "Compression",
      "Merge sort",
    ],
    url: "#",
  },
];

export default Download;
