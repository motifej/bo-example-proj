import {cities , accountStatuses , accountKycStatuses} from "./tmp-data"


const config = {
    name: "searchUsers",
    formInputs: [
        {
            name: "id",
            type: "text",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "ID"
        },
        {
            name: "first_name",
            type: "text",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "First Name"
        },
        {
            name: "last_name",
            type: "text",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "Last Name"
        },
        {
            name: "email",
            type: "email",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "Email"
        },
        {
            name: "phone",
            type: "text",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "Phone Number"
        },
        {
            name: "wallet_address",
            type: "text",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "Wallet Address"
        },
        {
            name: "countries",
            type: "select",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "Country",
            options: cities,
            multiple:false,
            input_id:"country-multi-select"
        },
        {
            name: "user_status",
            type: "select",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "Status",
            options: accountStatuses,
            multiple:false
        },
        {
            name: "user_kyc_status",
            type: "select",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "KYC Status",
            options: accountKycStatuses,
            multiple:false
        },
        {
            name: "has_deposit",
            type: "checkbox",
            grid: {
                label: {
                    xs: 12,
                    sm: 2
                },
                field: {
                    xs: 12,
                    sm: 9
                }
            },
            label: "Has Deposit"
        },
    ]
};

export default config;
