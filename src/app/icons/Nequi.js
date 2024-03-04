export const Nequi = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      width={width || size || "800px"}
      height={height || size || "800px"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs></defs>
      <path
        fill="none"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.43,7.0736l19.8777,7.9381a2.2793,2.2793,0,0,1,1.345,2.747l-5.79,20.1234a3.4961,3.4961,0,0,1-4.9494,2.147L8.0348,28.86a4.6467,4.6467,0,0,1-1.6206-6.9049L16.91,7.79a2.1458,2.1458,0,0,1,2.52-.7154Z"
      />
      <path
        fill="none"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.1436,14.4452l15.9377-8.156a2.6824,2.6824,0,0,1,3.2363.6166l13.693,15.5721a1.9653,1.9653,0,0,1-.045,2.6449L27.0269,40.99a3.23,3.23,0,0,1-4.9392-.281L7.5605,21.2624a4.58,4.58,0,0,1,1.5827-6.8179Z"
      />
    </svg>
  );
};
