import IncomeChart from '@/components/IncomeTrendGraph';
import { invoices } from '@/mock/invoices';
import React from 'react';
import { FaCaretDown, FaRegBell } from 'react-icons/fa';
import { GoPlusCircle } from 'react-icons/go';
import { LuCrown } from 'react-icons/lu';
import { MdOutlineCalendarMonth, MdOutlineEdit } from 'react-icons/md';

const statusStyles: { [key: string]: string } = {
  'Update Status': 'bg-purple-800 text-white',
  Unpaid: 'bg-gray-200 text-gray-500',
  Disputed: 'bg-red-200 text-red-500',
  Paid: 'bg-green-200 text-green-500',
  'Partially Paid': 'bg-yellow-100 text-yellow-500',
  Overdue: 'bg-red-200 text-red-600',
  Awaited: 'bg-yellow-100 text-yellow-500',
  Draft: 'bg-gray-100 text-gray-500',
};

const invoice: React.FC = () => {
  return (
    <>
      {/* svg for gradient */}
      <svg width="0" height="0">
        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stopColor="#DD2A7B" offset="0%" />
          <stop stopColor="#9747FF" offset="50%" />
          <stop stopColor="#334CCA" offset="100%" />
        </linearGradient>
      </svg>
      <div className="grid gap-6 rounded-t-[46px] bg-white px-5 py-6">
        {/* Create Invoice SECTION */}
        <section className="flex flex-col items-center justify-center gap-3">
          <button className="flex w-full flex-col items-center justify-center gap-2 rounded-[46px] bg-[#F2F2F2] py-4 md:w-[90%]">
            <GoPlusCircle
              className="text-6xl"
              style={{ fill: 'url(#blue-gradient)' }}
            />
            <p className="text-gradient-custom text-3xl font-bold">
              Create New Invoice
            </p>
            <p className="text-[#999999]">
              Start by creating and sending new invoice
            </p>
          </button>
          <p className="font-medium text-[#8134AF]">
            Or Upload an existing invoice and set payment reminder
          </p>
        </section>

        <section className="grid h-auto grid-rows-2 gap-5 text-[#999999] md:grid-cols-2 md:grid-rows-1">
          {/* Revenue Details SECTION */}
          <div className="grid gap-5">
            <div className="rounded-3xl border-2 border-[#F2F2F2] p-3">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-medium">Time Period</h1>
                <h1>dd:mm:yyyy - dd:mm:yyyy</h1>
              </div>
              <div className="flex gap-3 py-4">
                <button className="rounded-full border-2 border-[#F2F2F2] px-3 py-0.5 text-lg">
                  1Month
                </button>
                <button className="rounded-full border-2 border-[#F3E8FF] bg-[#e7cde7]/20 px-3 py-0.5 text-lg">
                  <span className="text-gradient-custom">3Months</span>
                </button>
                <button className="flex items-end gap-1.5 rounded-full border-2 border-[#F2F2F2] px-3 py-0.5 text-lg">
                  <span>1Year</span>
                  <LuCrown
                    className="text-2xl"
                    style={{ stroke: 'url(#blue-gradient)' }}
                  />
                </button>
              </div>
              <button className="flex items-center gap-1 rounded-full border-2 border-[#F2F2F2] px-3 py-0.5 text-lg">
                <MdOutlineCalendarMonth className="text-2xl" />
                <span>Custom</span>
              </button>
            </div>

            <div className="rounded-3xl border-2 border-[#F2F2F2] p-3">
              <h1 className="text-xl font-medium">Total Earnings</h1>
              <p className="text-3xl font-bold text-[#8134AF]">$1,25,000</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-3xl border-2 border-[#F2F2F2] p-3">
                <h1 className="mb-2.5 text-xl font-medium">Payment Awaited</h1>
                <p className="text-3xl font-bold text-[#8134AF]">$25,000</p>
              </div>
              <div className="rounded-3xl border-2 border-[#F2F2F2] p-3">
                <h1 className="mb-2.5 text-xl font-medium">Payment Overdue</h1>
                <p className="text-3xl font-bold text-[#8134AF]">$25,000</p>
              </div>
            </div>
          </div>
          {/* Income Trend SECTION */}
          <div className=" rounded-4xl border-2 border-[#F2F2F2] p-3">
            <h1 className="font-semibold">Income Trend</h1>
            <h1>Your monthly income and growth for the last 6 months.</h1>
            <div className="flex items-center pt-5 justify-center h-[85%]">
              <IncomeChart />
            </div>
          </div>
        </section>

        {/* Your Invoices SECTION */}
        <section className="text-xl font-semibold text-[#999999]">
          <div className="mx-auto rounded-lg p-2">
            <div className="flex justify-between pb-2">
              <h1>Your Invoices</h1>
              <button>
                <FaCaretDown className="text-black" />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
              {invoices.map((invoice) => (
                <div
                  key={invoice.id}
                  className="flex items-center justify-between rounded-2xl border-2 border-[#F2F2F2] p-3"
                >
                  <div>
                    <p className="font-medium text-[#6B7280]">
                      {invoice.clientName}
                    </p>
                    <p className="text-base font-normal text-[#999999]">
                      {invoice.amount}, Due: {invoice.dueDate}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <p
                      className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ${statusStyles[invoice.status]}`}
                    >
                      <span>{invoice.status}</span>
                      <span>
                        {invoice.status === 'Update Status' && <FaCaretDown />}
                      </span>
                    </p>
                    {(invoice.status === 'Overdue' ||
                      invoice.status === 'Awaited') && <FaRegBell />}
                    {invoice.status === 'Draft' && <MdOutlineEdit />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default invoice;
