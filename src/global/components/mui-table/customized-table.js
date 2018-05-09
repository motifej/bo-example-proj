import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table: {
        minWidth: 700
    },
    row: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.background.default
        }
    }
});

const buildTableHeader = header => {
    return header.map((col, index) => (
        <CustomTableCell key={index}>{col.name}</CustomTableCell>
    ));
};

const buildTableRow = (row, classes) => {
    return (
        <TableRow className={classes.row} key={row.id}>
            {Object.keys(row).map((key, index) => {
                return (
                    <CustomTableCell key={index}>{row[key]}</CustomTableCell>
                );
            })}
        </TableRow>
    );
};

class CustomizedTable extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes, data, header } = this.props;
        if (header && data) {
            return (
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>{buildTableHeader(header)}</TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(row => {
                                return buildTableRow(row, classes);
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            );
        } else {
            return <div>Loading..</div>;
        }
    }
}

CustomizedTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
