import React, { PropTypes } from 'react';
import { segmentTrackingId, segmentTrackingSrc } from '../config';

function Html({ title, description, style, script, children, state }) {
  return (
    <html className="no-js" lang="">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <style id="css" dangerouslySetInnerHTML={{ __html: style }} />
        {segmentTrackingId && <script type="text/javascript" src={segmentTrackingSrc} />}
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {script && (
          <script
            id="source"
            src={script}
            data-initial-state={JSON.stringify(state)}
          />
        )}
      </body>
    </html>
  );
}

Html.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  script: PropTypes.string,
  children: PropTypes.string,
  state: PropTypes.object.isRequired,
};

export default Html;
