import FuseExample from "@fuse/core/FuseExample";
import FuseHighlight from "@fuse/core/FuseHighlight";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BadgesDoc(props) {
  return (
    <>
      <div className="flex flex-1 flex-grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/badges"
          target="_blank"
          role="button"
        >
          <Icon>link</Icon>
          <span className="mx-4">Reference</span>
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Badge
      </Typography>
      <Typography className="description">
        Badge generates a small badge to the top-right of its child(ren).
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic badge
      </Typography>
      <Typography className="mb-40" component="div">
        Examples of badges containing text, using primary and secondary colors.
        The badge is applied to its children.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/SimpleBadge.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/SimpleBadge.js")}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color
      </Typography>
      <Typography className="mb-40" component="div">
        Use <code>color</code> prop to apply theme palette to component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/ColorBadge.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/ColorBadge.js")}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here is an example of customizing the component. You can learn more
        about this in the{" "}
        <a href="/customization/how-to-customize/">
          overrides documentation page
        </a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/CustomizedBadges.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/CustomizedBadges.js")}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Badge visibility
      </Typography>
      <Typography className="mb-40" component="div">
        The visibility of badges can be controlled using the{" "}
        <code>invisible</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/BadgeVisibility.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeVisibility.js")}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The badge auto hides with badgeContent is zero. You can override this
        with the <code>showZero</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/ShowZeroBadge.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/ShowZeroBadge.js")}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Maximum value
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>max</code> prop to cap the value of the badge
        content.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/BadgeMax.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeMax.js")}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dot badge
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>dot</code> prop changes a badge into a small dot. This can be
        used as a notification that something has changed without giving a
        count.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/DotBadge.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/DotBadge.js")}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Badge overlap
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>overlap</code> prop to place the badge relative to
        the corner of the wrapped element.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/BadgeOverlap.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeOverlap.js")}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Badge alignment
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>anchorOrigin</code> prop to move the badge to any
        corner of the wrapped element.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/BadgeAlignment.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/BadgeAlignment.js")}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled
      </Typography>
      <Typography className="mb-40" component="div">
        The badge also comes with an unstyled version. It&#39;s ideal for doing
        heavy customizations and minimizing bundle size.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import BadgeUnstyled from '@mui/core/BadgeUnstyled';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/UnstyledBadge.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/UnstyledBadge.js")}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        You can&#39;t rely on the content of the badge to be announced
        correctly. You should provide a full description, for instance, with{" "}
        <code>aria-label</code>:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          className="my-24"
          iframe={false}
          component={
            require("app/main/documentation/material-ui-components/components/badges/AccessibleBadges.js")
              .default
          }
          raw={require("!raw-loader!app/main/documentation/material-ui-components/components/badges/AccessibleBadges.js")}
        />
      </Typography>
    </>
  );
}

export default BadgesDoc;
