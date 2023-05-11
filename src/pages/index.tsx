import Topbar from "@/components/layout/topbar";

import { IconButton, Button } from "@/components/base";

import chevron_left_svg from "@material-design-icons/svg/filled/chevron_left.svg";
import notifications_svg from "@material-design-icons/svg/filled/notifications.svg";
import add_circle_svg from "@material-design-icons/svg/filled/add_circle.svg";
import extension_svg from "@material-design-icons/svg/filled/extension.svg";

function Home() {
  return (
    <Topbar
      title="Title"
      preActions={<IconButton variant="outlined" icon={chevron_left_svg} size="sm" />}
      postActions={
        <>
          <IconButton variant="transparent" icon={notifications_svg} size="sm" />
          <Button variant="transparent" size="sm" label="Apps" icon={extension_svg} />
          <Button variant="filled" size="sm" label="Create New" icon={add_circle_svg} />
        </>
      }
    />
  );
}

export default Home;
