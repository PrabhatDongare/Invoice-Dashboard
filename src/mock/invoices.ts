export type Invoice = {
    id: number;
    clientName: string;
    amount: string;
    dueDate: string;
    status: string;
};

export const invoices: Invoice[] = [
    {
        id: 1,
        clientName: "Client Name",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Update Status",
    },
    {
        id: 2,
        clientName: "Client Name",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Unpaid",
    },
    {
        id: 3,
        clientName: "Client Name",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Disputed",
    },
    {
        id: 4,
        clientName: "Income Trend",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Paid",
    },
    {
        id: 5,
        clientName: "Income Trend",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Paid",
    },
    {
        id: 6,
        clientName: "Income Trend",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Partially Paid",
    },
    {
        id: 7,
        clientName: "Income Trend",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Paid",
    },
    {
        id: 8,
        clientName: "Income Trend",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Overdue",
    },
    {
        id: 9,
        clientName: "Income Trend",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Awaited",
    },
    {
        id: 10,
        clientName: "Income Trend",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Draft",
    },
    {
        id: 11,
        clientName: "Income Trend",
        amount: "₹1,25,000",
        dueDate: "2024-06-15",
        status: "Paid",
    }
];
