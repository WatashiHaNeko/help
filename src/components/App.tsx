import * as React from "react";
import { Button, DatePicker, version } from "antd";

// FIXME Antd css not loading
export const App = () => (<>
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
    </Button>
</>
);