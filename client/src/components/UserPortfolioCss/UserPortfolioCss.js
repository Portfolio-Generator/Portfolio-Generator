// CSS template literal to be used in Generated Portfolio
const UserPortfolioCss = 
`:root {
  --rich-black: #0a090c;
  --white: #f0edee;
  --dark-green: #07393c;
  --ming: #2c666e;
  --middle-blue: #A5C7D0;
}

/* ----------------- */
/* --Color Classes-- */
/* ----------------- */

.font-rich-black {
  color: var(--rich-black);
}

.font-white {
  color: var(--white);
}

.font-dark-green {
  color: var(--dark-green);
}

.font-ming {
  color: var(--ming);
}

.font-middle-blue {
  color: var(--middle-blue);
}

.bg-rich-black {
  background-color: var(--rich-black);
}

.bg-white {
  background-color: var(--white);
}

.bg-dark-green {
  background-color: var(--dark-green);
}

.bg-ming {
  background-color: var(--ming);
}

.bg-middle-blue {
  background-color: var(--middle-blue);
}

.bd-rich-black {
  border-color: var(--rich-black);
}

.bd-white {
  border-color: var(--white);
}

.bd-dark-green {
  border-color: var(--dark-green);
}

.bd-ming {
  border-color: var(--ming);
}

.bd-middle-blue {
  border-color: var(--middle-blue);
}

/* ----------------- */
/* Color Classes End */
/* ----------------- */

.row {
  display:flex;
  flex-wrap: nowrap;
}

#img {
  width: 55px;
  height: 55px;
}

.raleway {
  font-family: 'Raleway', sans-serif; 
}

.montserrat {
  font-family: 'Montserrat', sans-serif;
}

.koho {
  font-family: 'KoHo', sans-serif;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.bullseye {
  background: var(--rich-black)!important;
  color: var(--white)!important;
}

.proimg {
  max-width: 200px; 
  max-height: 275px;
}


.rounded-none {
  border-radius: 0px;
}

.rounded-sm {
  border-radius: 0.125rem;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-2xl {
  border-radius: 1rem;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.rounded-t-sm {
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
}

.rounded-r-sm {
  border-top-right-radius: 0.125rem;
  border-bottom-right-radius: 0.125rem;
}

.rounded-b-sm {
  border-bottom-right-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}

.rounded-l-sm {
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}

.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}

.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.rounded-t-md {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}

.rounded-r-md {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.rounded-b-md {
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.rounded-r-xl {
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.rounded-b-xl {
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.rounded-l-xl {
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.rounded-t-2xl {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.rounded-r-2xl {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.rounded-b-2xl {
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.rounded-l-2xl {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.rounded-t-3xl {
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.rounded-r-3xl {
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}

.rounded-b-3xl {
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.rounded-l-3xl {
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}

.rounded-t-full {
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
}

.rounded-r-full {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}

.rounded-b-full {
  border-bottom-right-radius: 9999px;
  border-bottom-left-radius: 9999px;
}

.rounded-l-full {
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
}

.rounded-tl-none {
  border-top-left-radius: 0px;
}

.rounded-tr-none {
  border-top-right-radius: 0px;
}

.rounded-br-none {
  border-bottom-right-radius: 0px;
}

.rounded-bl-none {
  border-bottom-left-radius: 0px;
}

.rounded-tl-sm {
  border-top-left-radius: 0.125rem;
}

.rounded-tr-sm {
  border-top-right-radius: 0.125rem;
}

.rounded-br-sm {
  border-bottom-right-radius: 0.125rem;
}

.rounded-bl-sm {
  border-bottom-left-radius: 0.125rem;
}

.rounded-tl {
  border-top-left-radius: 0.25rem;
}

.rounded-tr {
  border-top-right-radius: 0.25rem;
}

.rounded-br {
  border-bottom-right-radius: 0.25rem;
}

.rounded-bl {
  border-bottom-left-radius: 0.25rem;
}

.rounded-tl-md {
  border-top-left-radius: 0.375rem;
}

.rounded-tr-md {
  border-top-right-radius: 0.375rem;
}

.rounded-br-md {
  border-bottom-right-radius: 0.375rem;
}

.rounded-bl-md {
  border-bottom-left-radius: 0.375rem;
}

.rounded-tl-lg {
  border-top-left-radius: 0.5rem;
}

.rounded-tr-lg {
  border-top-right-radius: 0.5rem;
}

.rounded-br-lg {
  border-bottom-right-radius: 0.5rem;
}

.rounded-bl-lg {
  border-bottom-left-radius: 0.5rem;
}

.rounded-tl-xl {
  border-top-left-radius: 0.75rem;
}

.rounded-tr-xl {
  border-top-right-radius: 0.75rem;
}

.rounded-br-xl {
  border-bottom-right-radius: 0.75rem;
}

.rounded-bl-xl {
  border-bottom-left-radius: 0.75rem;
}

.rounded-tl-2xl {
  border-top-left-radius: 1rem;
}

.rounded-tr-2xl {
  border-top-right-radius: 1rem;
}

.rounded-br-2xl {
  border-bottom-right-radius: 1rem;
}

.rounded-bl-2xl {
  border-bottom-left-radius: 1rem;
}

.rounded-tl-3xl {
  border-top-left-radius: 1.5rem;
}

.rounded-tr-3xl {
  border-top-right-radius: 1.5rem;
}

.rounded-br-3xl {
  border-bottom-right-radius: 1.5rem;
}

.rounded-bl-3xl {
  border-bottom-left-radius: 1.5rem;
}

.rounded-tl-full {
  border-top-left-radius: 9999px;
}

.rounded-tr-full {
  border-top-right-radius: 9999px;
}

.rounded-br-full {
  border-bottom-right-radius: 9999px;
}

.rounded-bl-full {
  border-bottom-left-radius: 9999px;
}

.border-solid {
  border-style: solid;
}

.border-dashed {
  border-style: dashed;
}

.border-dotted {
  border-style: dotted;
}

.border-double {
  border-style: double;
}

.border-none {
  border-style: none;
}

.border-0 {
  border-width: 0px;
}

.border-2 {
  border-width: 2px;
}

.border-4 {
  border-width: 4px;
}

.border-8 {
  border-width: 8px;
}

.border {
  border-width: 1px;
}

.border-t-0 {
  border-top-width: 0px;
}

.border-r-0 {
  border-right-width: 0px;
}

.border-b-0 {
  border-bottom-width: 0px;
}

.border-l-0 {
  border-left-width: 0px;
}

.border-t-2 {
  border-top-width: 2px;
}

.border-r-2 {
  border-right-width: 2px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-l-2 {
  border-left-width: 2px;
}

.border-t-4 {
  border-top-width: 4px;
}

.border-r-4 {
  border-right-width: 4px;
}

.border-b-4 {
  border-bottom-width: 4px;
}

.border-l-4 {
  border-left-width: 4px;
}

.border-t-8 {
  border-top-width: 8px;
}

.border-r-8 {
  border-right-width: 8px;
}

.border-b-8 {
  border-bottom-width: 8px;
}

.border-l-8 {
  border-left-width: 8px;
}

.border-t {
  border-top-width: 1px;
}

.border-r {
  border-right-width: 1px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-l {
  border-left-width: 1px;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.table-caption {
  display: table-caption;
}

.table-cell {
  display: table-cell;
}

.table-column {
  display: table-column;
}

.table-column-group {
  display: table-column-group;
}

.table-footer-group {
  display: table-footer-group;
}

.table-header-group {
  display: table-header-group;
}

.table-row-group {
  display: table-row-group;
}

.table-row {
  display: table-row;
}

.flow-root {
  display: flow-root;
}

.grid {
  display: grid;
}

.inline-grid {
  display: inline-grid;
}

.contents {
  display: contents;
}

.hidden {
  display: none;
}

.flex-row {
  flex-direction: row;
}

.flex-row-reverse {
  flex-direction: row-reverse;
}

.flex-col {
  flex-direction: column;
}

.flex-col-reverse {
  flex-direction: column-reverse;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.place-items-auto {
  place-items: auto;
}

.place-items-start {
  place-items: start;
}

.place-items-end {
  place-items: end;
}

.place-items-center {
  place-items: center;
}

.place-items-stretch {
  place-items: stretch;
}

.place-content-center {
  place-content: center;
}

.place-content-start {
  place-content: start;
}

.place-content-end {
  place-content: end;
}

.place-content-between {
  place-content: space-between;
}

.place-content-around {
  place-content: space-around;
}

.place-content-evenly {
  place-content: space-evenly;
}

.place-content-stretch {
  place-content: stretch;
}

.place-self-auto {
  place-self: auto;
}

.place-self-start {
  place-self: start;
}

.place-self-end {
  place-self: end;
}

.place-self-center {
  place-self: center;
}

.place-self-stretch {
  place-self: stretch;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.items-stretch {
  align-items: stretch;
}

.content-center {
  align-content: center;
}

.content-start {
  align-content: flex-start;
}

.content-end {
  align-content: flex-end;
}

.content-between {
  align-content: space-between;
}

.content-around {
  align-content: space-around;
}

.content-evenly {
  align-content: space-evenly;
}

.self-auto {
  align-self: auto;
}

.self-start {
  align-self: flex-start;
}

.self-end {
  align-self: flex-end;
}

.self-center {
  align-self: center;
}

.self-stretch {
  align-self: stretch;
}

.justify-items-auto {
  justify-items: auto;
}

.justify-items-start {
  justify-items: start;
}

.justify-items-end {
  justify-items: end;
}

.justify-items-center {
  justify-items: center;
}

.justify-items-stretch {
  justify-items: stretch;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.justify-evenly {
  justify-content: space-evenly;
}

.justify-self-auto {
  justify-self: auto;
}

.justify-self-start {
  justify-self: start;
}

.justify-self-end {
  justify-self: end;
}

.justify-self-center {
  justify-self: center;
}

.justify-self-stretch {
  justify-self: stretch;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.flex-initial {
  flex: 0 1 auto;
}

.flex-none {
  flex: none;
}

.flex-grow-0 {
  flex-grow: 0;
}

.flex-grow {
  flex-grow: 1;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.flex-shrink {
  flex-shrink: 1;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.order-first {
  order: -9999;
}

.order-last {
  order: 9999;
}

.order-none {
  order: 0;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.float-none {
  float: none;
}

.clear-left {
  clear: left;
}

.clear-right {
  clear: right;
}

.clear-both {
  clear: both;
}

.clear-none {
  clear: none;
}

.font-thin {
  font-weight: 100;
}

.font-extralight {
  font-weight: 200;
}

.font-light {
  font-weight: 300;
}

.font-normal {
  font-weight: 400;
}

.font-medium {
  font-weight: 500;
}

.font-semibold {
  font-weight: 600;
}

.font-bold {
  font-weight: 700;
}

.font-extrabold {
  font-weight: 800;
}

.font-black {
  font-weight: 900;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}

.text-8xl {
  font-size: 6rem;
  line-height: 1;
}

.text-9xl {
  font-size: 8rem;
  line-height: 1;
}

.m-0 {
  margin: 0px;
}

.m-1 {
  margin: 0.25rem;
}

.m-2 {
  margin: 0.5rem;
}

.m-3 {
  margin: 0.75rem;
}

.m-4 {
  margin: 1rem;
}

.m-5 {
  margin: 1.25rem;
}

.m-6 {
  margin: 1.5rem;
}

.m-7 {
  margin: 1.75rem;
}

.m-8 {
  margin: 2rem;
}

.m-9 {
  margin: 2.25rem;
}

.m-10 {
  margin: 2.5rem;
}

.m-11 {
  margin: 2.75rem;
}

.m-12 {
  margin: 3rem;
}

.m-14 {
  margin: 3.5rem;
}

.m-16 {
  margin: 4rem;
}

.m-20 {
  margin: 5rem;
}

.m-24 {
  margin: 6rem;
}

.m-28 {
  margin: 7rem;
}

.m-32 {
  margin: 8rem;
}

.m-36 {
  margin: 9rem;
}

.m-40 {
  margin: 10rem;
}

.m-44 {
  margin: 11rem;
}

.m-48 {
  margin: 12rem;
}

.m-52 {
  margin: 13rem;
}

.m-56 {
  margin: 14rem;
}

.m-60 {
  margin: 15rem;
}

.m-64 {
  margin: 16rem;
}

.m-72 {
  margin: 18rem;
}

.m-80 {
  margin: 20rem;
}

.m-96 {
  margin: 24rem;
}

.m-auto {
  margin: auto;
}

.m-px {
  margin: 1px;
}

.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}

.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}

.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}

.mx-3 {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}

.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}

.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.mx-6 {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

.my-7 {
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
}

.mx-7 {
  margin-left: 1.75rem;
  margin-right: 1.75rem;
}

.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.mx-8 {
  margin-left: 2rem;
  margin-right: 2rem;
}

.my-9 {
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
}

.mx-9 {
  margin-left: 2.25rem;
  margin-right: 2.25rem;
}

.my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

.mx-10 {
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}

.my-11 {
  margin-top: 2.75rem;
  margin-bottom: 2.75rem;
}

.mx-11 {
  margin-left: 2.75rem;
  margin-right: 2.75rem;
}

.my-12 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.mx-12 {
  margin-left: 3rem;
  margin-right: 3rem;
}

.my-14 {
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
}

.mx-14 {
  margin-left: 3.5rem;
  margin-right: 3.5rem;
}

.my-16 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.mx-16 {
  margin-left: 4rem;
  margin-right: 4rem;
}

.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.mx-20 {
  margin-left: 5rem;
  margin-right: 5rem;
}

.my-24 {
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.mx-24 {
  margin-left: 6rem;
  margin-right: 6rem;
}

.my-28 {
  margin-top: 7rem;
  margin-bottom: 7rem;
}

.mx-28 {
  margin-left: 7rem;
  margin-right: 7rem;
}

.my-32 {
  margin-top: 8rem;
  margin-bottom: 8rem;
}

.mx-32 {
  margin-left: 8rem;
  margin-right: 8rem;
}

.my-36 {
  margin-top: 9rem;
  margin-bottom: 9rem;
}

.mx-36 {
  margin-left: 9rem;
  margin-right: 9rem;
}

.my-40 {
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.mx-40 {
  margin-left: 10rem;
  margin-right: 10rem;
}

.my-44 {
  margin-top: 11rem;
  margin-bottom: 11rem;
}

.mx-44 {
  margin-left: 11rem;
  margin-right: 11rem;
}

.my-48 {
  margin-top: 12rem;
  margin-bottom: 12rem;
}

.mx-48 {
  margin-left: 12rem;
  margin-right: 12rem;
}

.my-52 {
  margin-top: 13rem;
  margin-bottom: 13rem;
}

.mx-52 {
  margin-left: 13rem;
  margin-right: 13rem;
}

.my-56 {
  margin-top: 14rem;
  margin-bottom: 14rem;
}

.mx-56 {
  margin-left: 14rem;
  margin-right: 14rem;
}

.my-60 {
  margin-top: 15rem;
  margin-bottom: 15rem;
}

.mx-60 {
  margin-left: 15rem;
  margin-right: 15rem;
}

.my-64 {
  margin-top: 16rem;
  margin-bottom: 16rem;
}

.mx-64 {
  margin-left: 16rem;
  margin-right: 16rem;
}

.my-72 {
  margin-top: 18rem;
  margin-bottom: 18rem;
}

.mx-72 {
  margin-left: 18rem;
  margin-right: 18rem;
}

.my-80 {
  margin-top: 20rem;
  margin-bottom: 20rem;
}

.mx-80 {
  margin-left: 20rem;
  margin-right: 20rem;
}

.my-96 {
  margin-top: 24rem;
  margin-bottom: 24rem;
}

.mx-96 {
  margin-left: 24rem;
  margin-right: 24rem;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-px {
  margin-top: 1px;
  margin-bottom: 1px;
}

.mx-px {
  margin-left: 1px;
  margin-right: 1px;
}

.mt-0 {
  margin-top: 0px;
}

.mr-0 {
  margin-right: 0px;
}

.mb-0 {
  margin-bottom: 0px;
}

.ml-0 {
  margin-left: 0px;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mb-1 {
  margin-bottom: 0.25rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mr-4 {
  margin-right: 1rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.ml-4 {
  margin-left: 1rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mr-5 {
  margin-right: 1.25rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.ml-5 {
  margin-left: 1.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mr-6 {
  margin-right: 1.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.ml-6 {
  margin-left: 1.5rem;
}

.mt-7 {
  margin-top: 1.75rem;
}

.mr-7 {
  margin-right: 1.75rem;
}

.mb-7 {
  margin-bottom: 1.75rem;
}

.ml-7 {
  margin-left: 1.75rem;
}

.mt-8 {
  margin-top: 2rem;
}

.mr-8 {
  margin-right: 2rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.ml-8 {
  margin-left: 2rem;
}

.mt-9 {
  margin-top: 2.25rem;
}

.mr-9 {
  margin-right: 2.25rem;
}

.mb-9 {
  margin-bottom: 2.25rem;
}

.ml-9 {
  margin-left: 2.25rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mr-10 {
  margin-right: 2.5rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.ml-10 {
  margin-left: 2.5rem;
}

.mt-11 {
  margin-top: 2.75rem;
}

.mr-11 {
  margin-right: 2.75rem;
}

.mb-11 {
  margin-bottom: 2.75rem;
}

.ml-11 {
  margin-left: 2.75rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mr-12 {
  margin-right: 3rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.ml-12 {
  margin-left: 3rem;
}

.mt-14 {
  margin-top: 3.5rem;
}

.mr-14 {
  margin-right: 3.5rem;
}

.mb-14 {
  margin-bottom: 3.5rem;
}

.ml-14 {
  margin-left: 3.5rem;
}

.mt-16 {
  margin-top: 4rem;
}

.mr-16 {
  margin-right: 4rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.ml-16 {
  margin-left: 4rem;
}

.mt-20 {
  margin-top: 5rem;
}

.mr-20 {
  margin-right: 5rem;
}

.mb-20 {
  margin-bottom: 5rem;
}

.ml-20 {
  margin-left: 5rem;
}

.mt-24 {
  margin-top: 6rem;
}

.mr-24 {
  margin-right: 6rem;
}

.mb-24 {
  margin-bottom: 6rem;
}

.ml-24 {
  margin-left: 6rem;
}

.mt-28 {
  margin-top: 7rem;
}

.mr-28 {
  margin-right: 7rem;
}

.mb-28 {
  margin-bottom: 7rem;
}

.ml-28 {
  margin-left: 7rem;
}

.mt-32 {
  margin-top: 8rem;
}

.mr-32 {
  margin-right: 8rem;
}

.mb-32 {
  margin-bottom: 8rem;
}

.ml-32 {
  margin-left: 8rem;
}

.mt-36 {
  margin-top: 9rem;
}

.mr-36 {
  margin-right: 9rem;
}

.mb-36 {
  margin-bottom: 9rem;
}

.ml-36 {
  margin-left: 9rem;
}

.mt-40 {
  margin-top: 10rem;
}

.mr-40 {
  margin-right: 10rem;
}

.mb-40 {
  margin-bottom: 10rem;
}

.ml-40 {
  margin-left: 10rem;
}

.mt-44 {
  margin-top: 11rem;
}

.mr-44 {
  margin-right: 11rem;
}

.mb-44 {
  margin-bottom: 11rem;
}

.ml-44 {
  margin-left: 11rem;
}

.mt-48 {
  margin-top: 12rem;
}

.mr-48 {
  margin-right: 12rem;
}

.mb-48 {
  margin-bottom: 12rem;
}

.ml-48 {
  margin-left: 12rem;
}

.mt-52 {
  margin-top: 13rem;
}

.mr-52 {
  margin-right: 13rem;
}

.mb-52 {
  margin-bottom: 13rem;
}

.ml-52 {
  margin-left: 13rem;
}

.mt-56 {
  margin-top: 14rem;
}

.mr-56 {
  margin-right: 14rem;
}

.mb-56 {
  margin-bottom: 14rem;
}

.ml-56 {
  margin-left: 14rem;
}

.mt-60 {
  margin-top: 15rem;
}

.mr-60 {
  margin-right: 15rem;
}

.mb-60 {
  margin-bottom: 15rem;
}

.ml-60 {
  margin-left: 15rem;
}

.mt-64 {
  margin-top: 16rem;
}

.mr-64 {
  margin-right: 16rem;
}

.mb-64 {
  margin-bottom: 16rem;
}

.ml-64 {
  margin-left: 16rem;
}

.mt-72 {
  margin-top: 18rem;
}

.mr-72 {
  margin-right: 18rem;
}

.mb-72 {
  margin-bottom: 18rem;
}

.ml-72 {
  margin-left: 18rem;
}

.mt-80 {
  margin-top: 20rem;
}

.mr-80 {
  margin-right: 20rem;
}

.mb-80 {
  margin-bottom: 20rem;
}

.ml-80 {
  margin-left: 20rem;
}

.mt-96 {
  margin-top: 24rem;
}

.mr-96 {
  margin-right: 24rem;
}

.mb-96 {
  margin-bottom: 24rem;
}

.ml-96 {
  margin-left: 24rem;
}

.mt-auto {
  margin-top: auto;
}

.mr-auto {
  margin-right: auto;
}

.mb-auto {
  margin-bottom: auto;
}

.ml-auto {
  margin-left: auto;
}

.mt-px {
  margin-top: 1px;
}

.mr-px {
  margin-right: 1px;
}

.mb-px {
  margin-bottom: 1px;
}

.ml-px {
  margin-left: 1px;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}


`

export default UserPortfolioCss;