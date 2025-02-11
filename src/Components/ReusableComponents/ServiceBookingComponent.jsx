import React from "react";


const ServiceBookingComponent = () => {
  return (
    <div className="w-[100%] min-h-[100vh]">
      <div className="w-[100%] min-h-[20vh] flex items-center justify-center bg-gradient-to-r from-[#0E4257] to-[#058CA6]">
        <h1 className="text-[40px] text-white font-bold">
          Book Your Service Online
        </h1>
      </div>

      <div className="w-[100%] min-h-[80vh] bg-gradient-to-r from-[#0E4257] to-[#058CA6] flex items-center justify-center gap-10 relative flex-wrap">
        <div className="w-[250px] h-[350px] bg-white rounded-t-[110px] flex items-center justify-center flex-col gap-5">
          <img
            src={
              "https://shop.yamaha-motor-india.com/cdn/shop/products/RACINGBLUE_840d4994-dab9-42d8-99a5-2dd7467a580c_1600x.webp?v=1680862171"
            }
            alt=""
            className="w-[150px] h-[150px] "
          />
          <h2 className="text-[24px] font-bold">Select Model</h2>
          <p className="pl-5 pr-5 font-medium">
            Choose your bike brand and model
          </p>
        </div>
        <div className="w-[250px] h-[350px] bg-white rounded-t-[110px] mb-20 flex items-center justify-center flex-col gap-5">
          <img
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAY1BMVEX///8AAAClpaX6+vqCgoJwcHBzc3PU1NS6uroyMjJaWlrt7e1BQUHNzc0RERFGRkbb29vAwMBPT09qamr09PTn5+csLCyPj48XFxeYmJhhYWG0tLR6enogICCfn5/h4eE6OjoUnuTYAAADbUlEQVR4nO2bbZeqIBCAU1FMrcDXStP+/6+8W+22KINKR9B7dp6PHcrnIA4zTO52CIIgCIIgCGIKb22BIV5Oq6gsqw2JFQdeJc4Ld22ZFzG/kOjsvEnXFvq6b5ycSkHpwWlVo47Wzd0BWE+L1pcggZTW04rd7FQeZZtjeumCNbRydnBTaH7uV+Kyx4jGtpZH3Sq7AUq3wOUs/x5lV4u2UVJCSte6iMXoaUurYLw6AULnxCd1LA23oVVwl6RnwOlEat6BXzGuFZLoDi2le8P7982SltexEFrbx3sUtIeJL5vSqls4cjv7tGk55+EoPHoOfY9aSCpvQKXnGr/dzsdJvif2B19+KD7BVVp9SLtNLbJISrhlrfN+Ec4La10ZXQAWLawVLPFLu12wTS0ftTSwrpXHRRHnU6MsaxVh9pURllk4sbHY1QrfyXw6vhNb1WrFGD6649nUGuxOY6cNFrXYID28sU1oSYX0SCJqT4vJKYJ6uuxpEVmLbEArkrWi9bUK4IzmVKyuRfey1l25uFbV2lPU+q+0GFBvb2BtxcCJUqpMb+zFrausdVUOtqfVylrq3MaelidrqS9rMYOQNkX1lmhTa7j9pMqtx252SnsxIhnJAu3m8mLsUscs61q74r2+qpE7aFPLY8/Y6bmN7zev6iKnq4dT3jjpYAeMiROpqh87Wl3wOEcrexL0uRtFfDWtLnuvc168LlVQ/+ezkgInEua1aCXWh3vSuq7b7wQF8oyZ1vIuUHNswDEYPpeGtRjUIIMYTJhhLWVLWqIfXc1qAcmMisyelgf2pmFuvf6ZUS0of1dSW9M6QK1OFb1Ya1Sr1rByKmtaWs2pTAz2JrW8SkcrEUOqSa0YqMFGENv9JrUKoL4fQcx7TGp1WlaOeFJvUgs4LR1DrM+Mzhb0pxE1Yjw1+iTSgwZUlMDGnQ6opQNq6YBaOvxZrXw6vsvVvnEtPmc7lI7gjBf7s2qybPhb29CS+gbGb2I4I7sppZaU+SV/GP9b5wO5UfZnA8RHoJYOBrXiLNEiE07pzWl5ejX1I3r9apjTojPOcvvsf/egPzdbO9ZEWjTChm20fI21wPL1U1BLB9TSAbV0QC0dln4XI514UWwePF1Ya0lQS4dq+pozYNrp6DjHqdcsZxITf0EC+AVZBEEQBEEQBNkq/wAxKEMVBPVLbQAAAABJRU5ErkJggg=="
            }
            alt=""
            className="w-[150px] h-[150px]"
          />
          <h2 className="text-[24px] font-bold">Personal Details</h2>
          <p className="pl-5 pr-5 font-medium">
            Fill in your details for our representative to reach out.
          </p>
        </div>
        <div className="w-[250px] h-[350px] bg-white rounded-t-[110px] flex items-center justify-center flex-col gap-5">
          <img
            src={
              "data:image/png;base64,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"
            }
            alt=""
            className="w-[150px] h-[150px]"
          />
          <h2 className="text-[24px] font-bold">Personal Details</h2>
          <p className="pl-5 pr-5 font-medium">
            Fill in your details for our representative to reach out
          </p>
        </div>
        <div className="w-[250px] h-[350px] bg-white rounded-t-[110px] mb-20 flex items-center justify-center flex-col gap-5">
          <img
            src={
              "https://img.freepik.com/free-vector/expert-approved-cartoon-character-holding-checkmark-symbol-hand-finished-task-done-sign-satisfactory-official-sanction-acceptance_335657-829.jpg?ga=GA1.1.1537977931.1731856289&semt=ais_hybrid"
            }
            alt=""
            className="w-[150px] h-[150px]"
          />
          <h2 className="text-[24px] font-bold">Confirmation</h2>
          <p className="pl-5 pr-5 font-medium">
            After confirmation you will receive a call from our team for further
            details
          </p>
        </div>
      </div>
    </div>
  );
};

export const SelectModel = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col bg-gradient-to-r from-[#0E4257] to-[#058CA6] p-4">
      <form className="w-full max-w-[800px] flex flex-col items-center gap-8">
        <div className="w-full bg-white flex flex-col items-center gap-4 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-black text-center">
            Select Your Model
          </h2>
          <input
            type="text"
            name="brand"
            placeholder="Enter Your Bike Brand"
            className="w-full max-w-[500px] h-[40px] border-b-2 outline-none border-blue-700 bg-transparent placeholder:text-black px-2"
          />
          <input
            type="text"
            name="model"
            placeholder="Enter Your Bike Model"
            className="w-full max-w-[500px] h-[40px] border-b-2 outline-none border-blue-700 bg-transparent placeholder:text-black px-2"
          />
          <input
            type="text"
            name="problem"
            placeholder="Enter Your Problem in Your Bike"
            className="w-full max-w-[500px] h-[40px] border-b-2 outline-none border-blue-700 bg-transparent placeholder:text-black px-2"
          />
        </div>

        {/* Personal Details */}
        <div className="w-full bg-white flex flex-col items-center gap-4 p-6 rounded-lg ">
          <h2 className="text-lg font-bold text-black text-center">
            Personal Details
          </h2>
          <input
            type="text"
            name="firstName"
            placeholder="Enter Your First Name"
            className="w-full max-w-[500px] h-[40px] border-b-2 border-blue-700 outline-none bg-transparent placeholder:text-black px-2"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
            className="w-full max-w-[500px] h-[40px] border-b-2 border-blue-700 outline-none bg-transparent placeholder:text-black px-2"
          />
          <input
            type="number"
            name="mobileNo"
            placeholder="Enter Your Mobile Number"
            className="w-full max-w-[500px] h-[40px] border-b-2 border-blue-700 outline-none bg-transparent placeholder:text-black px-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="w-full max-w-[500px] h-[40px] border-b-2 border-blue-700 outline-none bg-transparent placeholder:text-black px-2"
          />
          <input
            type="text"
            name="address"
            placeholder="Enter Your Address"
            className="w-full max-w-[500px] h-[40px] border-b-2 border-blue-700 outline-none bg-transparent placeholder:text-black px-2"
          />
        </div>

        {/* Area Selection */}
        <div className="w-full flex flex-col items-center gap-4 p-6 rounded-lg bg-white">
          <h2 className="text-lg font-bold text-black text-center">
            Select Your Area
          </h2>
          <input
            type="text"
            name="state"
            placeholder="Enter Your State"
            className="w-full max-w-[500px] h-[40px] border-b-2 border-blue-700 outline-none bg-transparent placeholder:text-black px-2"
          />
          <input
            type="text"
            name="district"
            placeholder="Enter Your District"
            className="w-full max-w-[500px] h-[40px] border-b-2 border-blue-700 outline-none bg-transparent placeholder:text-black px-2"
          />
          <input
            type="text"
            name="area"
            placeholder="Enter Your Area"
            className="w-full max-w-[500px] h-[40px] border-b-2 border-blue-700 outline-none bg-transparent placeholder:text-black px-2"
          />
        </div>

        {/* Submit Button */}
        <div className="w-full flex items-center justify-center">
          <button className="w-[150px] h-[40px] bg-white text-black rounded-md hover:bg-gray-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};



const services = [
  {
    id: "01",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAACUCAMAAADxqtj8AAAAY1BMVEX///8lJSUAAADHx8f6+vqamprPz88HBwf19fWDg4OxsbEODg4iIiIaGhoTExMdHR3k5OR4eHjAwMDs7OzY2NhiYmJMTEynp6doaGhAQEC5ubmRkZE6Ojre3t5cXFxXV1ctLS06k4NyAAAE30lEQVR4nO2da3OrIBCGAxIvERAv8W70///KY9qTk4ikYiqCZ3i/tDMdZh5xWZZ12Z5OVlZWVv+LEEK6ET4RSjOnvhTFuSgutZsxXzeQvHynCMoKePBb4VCVQeEc4wGy5toSj0YYPIQj6pH22mS60RblloCQJ/hTESGgdHXj/STk5pCK0P++Awpzd1zGZq7kLID0Lfq3CAzMtB+/aOH7ef8n2BYGrl8WU7LMfp/+MGa6YXm5fSjFflfYG7Z6k2HJ4l9Fh0Q38KvqUM5qntZT60Z+qobRKvjR+0Mz8Mc4zCFr4cfZJ45u8rvQKavWmc1f/MoIx59e3y1YfNf4Q/xXWqb6d13UQCE5Gc1pGNphGCOcSPgAsNEOf0pEMRn2QB+fE7djnVuf4xx4gpWBiXa/mVYCu/GG4PK6n7JLMAjeEM1TbdzfEthNBAPXf40kx998NxB4VdhoJB/lzwOzkNaiMMxPotmDYqg3YIu9mdVc38Vg7DoLhbx4V1pO3cBNPabxG1sezSeN52uk2xd4ooa3ZfgO/kvp7FURjZaf3rhdNlzwIikfR5ObPrdTc4aDvaXdv+OOvRhoi9ZQwxkCvCyOuXCOx9O24bLbdBWG5bIZ+PHUduhN1zHRnQZgGMjs/Ak/SNcpsZ5aAZWY+nHhltMXJmFtSsRHl9FZath56mV1RZr+dBZxK2cDbjsxHVrqiRbSajKLUS83DPXTYZUej8+mhw4iG7PEky0uivQ4nYxbtHJmPxo+t2z1nG95etldszaC3p3Sh7KO253uV1CPw7f0lv4zWXpL/5ksvaX/TJbe0n+m/4qeOsiXEXKoCfRcfB+VgZxK7liuJb6ffbCinpy4RDJsNBzLk/zdx8C1wnmyc81OGkPxh8BPRH7Om2+u7ib8zPmx4K3bb/ZZvy38iN/vlhfxy63hR/zrXmuXT9tvIk82HfRLcYnIjSSbBv2lUCxfw7VGXrzHunWr9dU4MoqqPSa/UGH1d3mFevhUkeHcTUe922GKDOduOup9fhaq8Dh34VB9tOluv1M9tEOk7yikV18maOktvaX/WZhQ4R2UI9B7Xnsr+zaUuRFhGj2FQZKxlGXJ8m0U4+hhzh4BL2K53PSbQo+nJU+okYrsTKEnXIYJNT9cwzKNnlz5/Ex6lajRN4QezzGcw8w9EVXq9MuTbwY9FB3x+FJGc+lFWUl2GHrhQEuvjR4dhl6UGziO3Yt8TnEUepILxuXLaSAz6AGel1Mnh9lrAbkx7kMO429JGEwPSDCNMf3gQDEmAGHsv8y+H0ulD42hB7B9uk3WSo4xhn54uRUg4SwNo3+90yARXlp6S2/pLb2lt/SW3tJbektv6S29MvpnSuqAZyta/htSHu6LJ8DRo0VIJ1tMZRA9iPLvrALLZZtimUQPaH7JuuySS3exM4oekLDqqxVd7MyivzckXVNAuAP9savq+B4y2wlT9RWN8i5krUiuvprUnze62kg7VPKiU7Gmj+cahTtUUZ8yRYXIOzVtDNSYThjsAX/qlEx+VO3UOk024l0l4UdeFUKxghtLu9w6+VJ63fy22KwWTCV+KV0iKqMISjXM2kjohM5gs4gBU3Deu/OVWw7hBg+AiTfoaIuPkqAfHv8d4VN5Qx8kelqOoc5NivNvVNRup7UxL/qNdIJbWVlZrdUfsEVWhmYhQJoAAAAASUVORK5CYII=",
    percentage: "100%",
    title: "Secure Payment",
  },
  {
    id: "02",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAACUCAMAAADbGilTAAAAb1BMVEX///8AAAABAQH8/PzNzc34+PgFBQXx8fHr6+vi4uLR0dH19fXu7u7f399xcXHGxsahoaE9PT2RkZFsbGyFhYW4uLjX19d6enoZGRlhYWFTU1MPDw82NjaxsbG+vr5aWlpKSkqZmZkgICAnJycuLi4f9PT0AAAJMklEQVR4nN1ci7aiOgwlVioPHyAgKqL4+P9vvG3Sop4DHkAKzN1r5s6cO8sa2jTZTXaxLBNwjIxqBtHYBjTH6u6ObUJjXOE6tglNYUcQsbGNaIjdCU67sY1oiAQAkrGNaAbhAjOI7H/CCxwQtsK/EWLPwGczOI9tRiMUMBO2XsY2owl8jraCP7YhDSCiANr6L0SCtTRV2Loe25C/4RbK1mLqnICJKIC2CmMnHwnYFria2Hjq2WB5UvM6g9NybGP+wLw0dQbe2Mb8gVh5q/wdj23MH6BplVmWA4xtzGd40lYOF2GsIIZTdgImXABkCNjRH5N2gsVRRixBXiN02ONibIM+YHPDCc2tHOf1thnboA8I0NTbztrdkHAHYxtUj+UFlz7yLT8SzgBwma4TqC0liwNXnFeY7nE2EPZx6QIieN1wiqfqBMy6oa0h/hSirfeRbaqFIzMAFy4gCdaWEthUj7MBnV6IY7tk61Sd4ICmPtRPD/zpMKpFtfAeL9uJiUiAlnvWFCk3JYKSsEgaAxN1AjtFU496NzlHnNjUHtWqaqxkWuWwLdd8Swl3NapV1Ugwq+6fdOW8x4mdXk2DWRFOY/gsDS3CyUYCCq6v1ZYUC4YTPMkkFPufxxYmIgHmsek5AZ0E3ieRDl+Ta3Y5IfwuuGEZDsKpcYKcY+R/P7RscLvxfCSbqsFYjIfC03tt0D3BBAtbboFT+CNJYSqbTa26SasNP1c7B2Tf0zrOxrSL3vMps9wQ8248Ja7F9pUpiglKK914P4pRNdhR0vq94fN3njgFxDKbzuA3/fMpm02osMWIpYQV/6T+ZTr+utlXRgEJjASvTHFsEKvmVWF0JUnt7IWBj4zlQZexfsOPcMoPPfc5fJt1guXtPxQF6cS497qNzezqtm6eQVeo03UVvBORxY7IaoiPm4JqpLUEBqxLtUfaWOeccd5hVIC0lkr4V4AutqJLbmsG3aq+d+tBxa681jb2hevtik7GSlvqZsDt9vyy+7z7HD2W644j3+omwLpB+/WXDr7+M3bYOYdyJlpsgro0in2k5qBvFb94bjeIyc5dbzEIz968Ieo7A4tNwyG8JKSkImbr0ZCf+zEenqSxxbzZR3rBvKA54sC3TSbVkqvGzpl2Ah58Xztr8q3MsoMMMLKJoHpuk5FXx1Je0Xd6rIFzKL/x2LJcx66Z/ijMzfMONtf7GbIta010ziF6j/hPtl0Ypkn+NtMhIOxUUnJpVWT+CM36wZIykAxVF7fjtAR7Oi7JaNd+YZpBjJtk5AAcbl9U7DcFGirNTU1N7VIyJpqRYtMsaFTDkQOh28LFQG9VGLa7yBICelr6VZFOjJXv9RaDoH8vYEGZVwVT/Xr83QHXiH/94BWQjFmZeuhl2ZaSfBChKPo9j86LMv7HvSgNxMIkd/30vM+LA9dM0XC491ind46ghz30069i1uoAoDbCsccYw8TphmPLkndNLL9A/A9zzbZnCTLzKNDqhP3llmXbDDSZN1CY86NyIxTf7ll5rAM6Uka9cw05nJ3jeYELR9gn34zPkj1yf/lb0mMjyXv+0PEA4u4U3I51CISTwcLsItVLB1mneCCm0OWlL6ULQ5NKCB46eGWdTjd+kOnw9zAug5C5hiOBqy4MfsYiKjlxMYC6xE5Lpw3nLddwHpafTYcpyCakH5e0tr7gVAFVLpO76pQY9dQXrJ5nzrS5sX5arn9PiboR7FhzuVOL2TlRt+argNcF85BsbcO7rmTroLUcS/qa0gu2aQu77R+vDzAlyLu32iCnccQ63kPsEQ5Bq91Msr3B76MGVC5tl889KjcMLNvD+PMiyGsG51iliDCN1e1jP6MOW3zCgWV7qMaCfdvrZGdq3A6r2Drgd4ZtD8r+GLI9UomlrT9HYh0YspGcUAZqn4DmlA6GdIJDZ1UjDO0EDvV22t+AZVq2N9xVxJyqnF2KW0PL9hjdKDvV8hYncOpy79CyPUw/H1jo7lJfWLbpOVsmvK5guI4gpTi/J4cxKv/WF5aVYmsosQ5pMsNqF1CCiVqZgkvpYCjFFlbla+KO7IaQTgOK6gxMxHc/jMPWCvJkt1EXVbACWHkCyCkdDENi6/Mk9lQkZA8Yz6sVFjF61Pb5uQPqBXmbU1n91kfy0/l3HWBA2d58r6LAD9hxpntqt/ymO4H8d2Sj+6iDyPZkaYD/EOQx3N+6/J8usRmopjhc/ZhZl3fi6R2wPGDPc/1eb2H5HfuLsise2KhcUEovDvf83VafOMEAugQv+3W+E6akmW5Un/TabvRbEyBL352WZHuZeQEvfdG7IM+7lz311C/NeqlfPd7iAV6gG+A4y9RbcV7miQU3kvJwLP++tGiCB92ImcHtNeWyC/6/wnQkcODnxlisKalWCdVQRkd7bP3CVkgva/w+akDf/Dw1y/Ivx9MXoFu+GisduWwOh88gtSLnMFvYYjKQC9PuZBJT5V+6ZVZ9iErCUuPzLCzfa/XdPWJFFwm0pHml1If8g1BFymawLyb8QAflLfEXszWNq3rHBP10Lvvf8KGn6m+V5k8kNJVyXy7UG4N6t0SBNYzF04Zi/rFDO0fZDDYYtvTRgvqbJgtbO+IdV2mXdyn3ePTXYq4izMsy1F48+VhU3QxNEsOEMo4k0ecb4CVToJ7qH7BVDVT5gbXJTBe2bLpXellaboQbBnVmzXbIKiwVSZEr31YhP2zQCRyuzkpeUUpg4mYRnVlOjI8mk0bhWVS/5ebSwZny+zy/614cJM1nxk5Ab8Z7vqG/mHvH1gXzU3YouenxJzf9jNXlKXHKcKyjKVN9TaZJ8qADUGMwDLU6i9Efpt62l5RqGiJ6XXZxrtOHaiGaigRpKeeX4aeL+lNEVvdSjiKfeG2mhazekEffceteOIlfLhyYuo96fp6oXwlee2zCl1O5kUjA1MUWqf758mVTi2N5gwG2JnxgeVKbQkTHr4UKwV1PrJG37c1VdQKOnvWl7k182DtqJzDRoY+Vs677yYvOWj27iUvJRI8f/QlV8gdeoDbwjgp8tUy/om1ZVuQmtI94syle9rpgSxq0xxERMsxk/Zf2BOfu/217m5ukyP1vA0Hae3/bXgCBmffM+UHfha1lZKi0KwL1Juo3Hfi1jcAvIe8tO//CK6P/x/gPj8ZflhmKVW8AAAAASUVORK5CYII=",
    percentage: "100%",
    title: "Quality Product",
  },
  {
    id: "03",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAaVBMVEX///8AAAB9fX1iYmKkpKSbm5vt7e2Xl5f4+Pjl5eX8/Pz09PSenp4kJCTPz8/MzMw2NjZycnLb29uHh4e3t7fCwsJYWFjV1dVdXV2srKxsbGxKSkoTExM+Pj4JCQlSUlIdHR0rKyuPj4+phRzmAAAEyklEQVR4nO2caXeqQAyGGVA2pSooCIrb//+R16qtOkmGRYak59znc63vCUwmq45jxF9XyaHOFqH5zxhZ1+qOF3FLIQjUk5RbDMqrQrWUaMepeiPj1gMJlIa4IzPVFaoFtyQNYEOlptya3oE2VCrgFvUGYkOlSm5Vr6AKlSSvM0cV1tyyXsDewytrbl1PcBuqC7euJ4QNV9y6nhA2dGNuYb8QNnS5dT2ZEE/5vw3bQ7yHf+CkcOt6It/bECdFkA2Jp1xx63oi39vIP8uEDVXuDUZVVdl8nfZN0Qgb2uEYbNLZUDa0RrJ1u2WTm7EV3lkt/LYK/R2PRKV2l5Z1IiYj3tjnRZvzs2KUeMVrkRLVzf/GLtuiSeKZW+I1Dmh4J9lOywvJxCjxwq3vxs70tBfc6u6cDBWj0ONW92BLX4sRt7Yfavphfx24xT04bGiN3Np+oQvBlMZV5g5FdVyek/0nGvFnnXcO7Iz4RRl4Z7NGOp0j7LhtHTC1ZRYtzFEBXSQs8IewHFzjNxv3RGukW1AF/gHPikYnxcvpN+jbkLBjbUejEwZLSiN90RB2HP59fBBlhMQTHfkQ1/XRlkYnJcKshPYkxLnOrWkMiVpXRVdBCDva0+hs8DfSEEASGnf2NPo5+o2GQJzQaMn3fBNW2BcaQjPqLqyHvQvfcLEvNLWWCTu69pr6Mep9TM+NsKPNXi9mx63pA7jv2VuUGCOhxcFYmsKfdWNK/glH+H25sUSMajQnux/iI1UROk/4BitG2Z2NWMATkDd8YmQrorVisxkRO37ZlRjC17GpYQHsaFfhNRiEoXhTjVSz49y2RMQ7Ns6pvdnRs3gD/gAkGgJHqNFOnqUBexfNNdzUu7uCJBvBhlhroM1MxmburrJyrBFQ4HiSViNWcTxerzIGT7rBNTIADrWgTukD4Ixtxlf9mG11jZLm/e6AAFzU1OQNEE4LGs74QZdYiRuEdvS0upb3MgLvLW9zANTnrKZMvQBtIHn3Cwgl7MepXQElHnnrF7F+Tcu7pcHcu7FwwoNeuN1xC4LoEpfcgiC67/4vsQ/6g5a0fvHgD0jUnU5DfYwDPe4WNM774A9cgL5ewxO2OHcl0nvOgraVHqSaQtuV1x6UukR5iYF+WgRuFOvV5DFKr90A2ZW8VB9MnohLXWZgVFHcaQEux3orpTOgMCbvhgZGFJfoA7+9l+YVZ6ANKGht6c4aPGdxNdpEV9jcYBsZ2F+Tdp5TYERxfhtOmRyF1bmBwxEXcKewp1/LMiLIquQZERnJElbMwQaUZRkR2+fcirr74MWnhPVb0JlfUXUSdCdWUm46w7ciBP1KUwTa+DfkpKYxelDM88jjElGrL1JexLCE0dcdITlVSIzuKzHZwJrehZVwVOIiMKweCuicRnPPtGy35QwSYz8qNk1L7V7nfztbTwZherlkq5w8IL90nsqJ8pHXVTuflHLsfdqya4hIXE7WMCz2EiApmVWO3fN6akvPEqvuI89+86bwgCz7XMuj7sf3MKEz6i8h5D3bfMSG6vCcyr5Xnj+OwPqDLRpYd7YhsPwoA0CKacOS5F8fRjWx3Z/l8KYDJCjR2Zq+Xdn757ze8S1cMMnRDRZDFpS+gnqQS+awT+p8dZksiqi7k/4HeBc+LAVISxAAAAAASUVORK5CYII=",
    percentage: "24/7",
    title: "Customer Support",
  },
];

const ServiceCard = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-[#0E4257] to-[#058CA6] flex items-center justify-center gap-10 flex-wrap p-10 shadow-2xl">
      {services.map((service) => (
        <div
          key={service.id}
          className="w-[400px] h-[320px] bg-white flex items-center justify-center flex-col gap-2 p-5 rounded-lg shadow-lg"
        >
          <p className="font-bold text-[30px]">{service.id}</p>
          <img src={service.image} alt={service.title} className="w-40 h-40" />
          <p className="font-bold text-[30px]">{service.percentage}</p>
          <p className="font-bold text-[20px]">{service.title}</p>
        </div>
      ))}
    </div>
  );
};


const ServiceFormComp = () => {
  return (
    <div>
      <ServiceBookingComponent />
      <SelectModel />
      <ServiceCard />
    </div>
  );
};

export default ServiceFormComp;
