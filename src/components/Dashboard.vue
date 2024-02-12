<template>
  <div
    class="h-screen relative rely"
    data-aos-duration="2000"
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
  >
    <div class="h-[50vh] p-10 overflow-hidden green">
      <div
        style="display: flex; align-items: center"
        class="flex flex-row justify-between"
      >
        <div class="flex flex-row space-x-2">
          <div class="text-green-600 text-5xl">
            <i class="fa-brands fa-pied-piper"></i>
          </div>
        </div>
        <div>
          <ul class="flex flex-row space-x-10 text-white font-black-800 dnon">
            <li
              style="background-color: white"
              class="text-black h-[25px] w-[100px] flex text-center justify-center rounded font-bold"
            >
              Dashboard
            </li>
            <li class="font-thin">Transactions</li>
            <li class="font-thin">Profile</li>
            <li class="font-thin">Settings</li>
          </ul>
        </div>
        <div class="flex flex-row space-x-5">
          <div class="flex flex-row relative">
            <div>
              <input
                style="background-color: rgba(255, 255, 255, 0.155)"
                type="text"
                placeholder="search here"
                class="dnon rounded-xl h-[35px] w-[200px] font-normal outline-0 px-[50px] bg-transparent placeholder:text-stone-200 placeholder:text-sm"
              />
            </div>
            <div class="dnon absolute text-white text-xl left-[20px] mt-[5px]">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div
            style="background-color: rgba(255, 255, 255, 0.155)"
            class="text-gray-400 text-2xl h-[40px] w-[40px] flex items-center justify-center rounded-full"
          >
            <i class="fa-solid fa-bell"></i>
          </div>
          <div class="flex flex-row space-x-10">
            <div
              style="background-color: rgba(255, 255, 255, 0.155)"
              class="text-orange-300 text-2xl h-[40px] w-[40px] flex items-center justify-center rounded-full"
            >
              <i class="fa-solid fa-face-smile"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="fcol flex flex-row justify-between mt-[150px] font-black-800">
        <div class="flex space-x-2">
          <div class="text-white text-2xl"><h1>Welcome back, Azeez's</h1></div>
          <div class="text-orange-300 text-2xl">
            <i class="fa-solid fa-thumbs-up"></i>
          </div>
        </div>
        <div class="text-white text-2xl">7th Feb. 2024 | 12:00pm</div>
      </div>
    </div>
    <div class="flex justify-center fcol mmt">
      <div class="flex flex-col h-[100vh]">
        <div
          class="absolute bg-center h-[240px] w-[450px] top-[360px] mx-[50px] rounded-2xl px-5 py-5 red white"
        >
          <h1 class="font-light text-gray-600">Account balance</h1>
          <div class="flex flex-row justify-between mt-10">
            <div class="font-black-800 text-xl">
              NGN. <span class="font-black text-2xl">2,000,678.00</span>
            </div>
            <div>
              <button
                class="bg-gray-300 w-[100px] h-[30px] font-light text-gray-500 rounded"
              >
                savings
              </button>
            </div>
          </div>
          <div class="flex flex-row mt-[50px] justify-center space-x-10">
            <div>
              <button
                class="bg-green-900 w-[150px] h-[40px] text-gray-100 rounded"
              >
                Send money
              </button>
            </div>
            <div>
              <button
                class="bg-green-900 w-[150px] h-[40px] text-gray-100 rounded"
              >
                Deposit
              </button>
            </div>
          </div>
        </div>
        <div
          class="h-[500px] w-[450px] mt-[220px] mx-10 rounded-2xl px-5 py-10 border dnon"
        >
          <div class="flex flex-row justify-between mx-[40px]">
            <div><h1 class="text-2xl font-semibold">Quick actions</h1></div>
            <div class="text-2xl text-teal-800">
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div
            class="mt-[20px] flex flex-wrap justify-center w-full px-5 gap-x-5 py-5 pol"
          >
            <div
              class="border border-gray-200 h-[100px] w-[90px] rounded-lg flex flex-col justify-center items-center mt-2 mx-2"
            >
              <div
                class="border border-gray-200 h-[50px] w-[50px] rounded flex justify-center items-center mt-2"
              >
                <div class="text-teal-700">
                  <i class="fa-solid fa-mobile"></i>
                </div>
              </div>
              <div class="m-2 text-sm text-light"><p>Airtime</p></div>
            </div>
            <div
              class="border border-gray-200 h-[100px] w-[90px] rounded-lg flex flex-col justify-center items-center mt-2 mx-2"
            >
              <div
                class="border border-gray-200 h-[50px] w-[50px] rounded flex justify-center items-center mt-2"
              >
                <div class="text-indigo-700">
                  <i class="fa-solid fa-money-check-dollar"></i>
                </div>
              </div>
              <div class="m-2 text-sm text-light"><p>ATM</p></div>
            </div>
            <div
              class="border border-gray-200 h-[100px] w-[90px] rounded-lg flex flex-col justify-center items-center mt-2"
            >
              <div
                class="border border-gray-200 h-[50px] w-[50px] rounded flex justify-center items-center mt-2"
              >
                <div class="text-amber-500">
                  <i class="fa-solid fa-basket-shopping"></i>
                </div>
              </div>
              <div class="m-2 text-sm text-light"><p>Shop</p></div>
            </div>
            <div
              class="border border-gray-200 h-[100px] w-[90px] rounded-lg flex flex-col justify-center items-center mt-2 mx-2"
            >
              <div
                class="border border-gray-200 h-[50px] w-[50px] rounded flex justify-center items-center mt-2"
              >
                <div class="text-amber-950">
                  <i class="fa-solid fa-lightbulb"></i>
                </div>
              </div>
              <div class="m-2 text-sm text-light"><p>Electricity</p></div>
            </div>
            <div
              class="border border-gray-200 h-[100px] w-[90px] rounded-lg flex flex-col justify-center items-center mt-2 mx-2"
            >
              <div
                class="border border-gray-200 h-[50px] w-[50px] rounded flex justify-center items-center mt-2"
              >
                <div class="text-blue-800">
                  <i class="fa-solid fa-wifi"></i>
                </div>
              </div>
              <div class="m-2 text-sm text-light"><p>Data</p></div>
            </div>
            <div
              class="border border-gray-200 h-[100px] w-[90px] rounded-lg flex flex-col justify-center items-center mt-2"
            >
              <div
                class="border border-gray-200 h-[50px] w-[50px] rounded flex justify-center items-center mt-2"
              >
                <div class="text-orange-950">
                  <i class="fa-solid fa-tv"></i>
                </div>
              </div>
              <div class="m-2 text-sm text-light"><p>Cable</p></div>
            </div>
            <div
              class="border border-gray-200 h-[100px] w-[90px] rounded-lg flex flex-col justify-center items-center mt-2 mx-2"
            >
              <div
                class="border border-gray-200 h-[50px] w-[50px] rounded flex justify-center items-center mt-2"
              >
                <div class="text-lime-700">
                  <i class="fa-solid fa-car"></i>
                </div>
              </div>
              <div class="m-2 text-sm text-light"><p>Auto</p></div>
            </div>
            <div
              class="border border-gray-200 h-[100px] w-[90px] rounded-lg flex flex-col justify-center items-center mt-2 mx-2"
            >
              <div
                class="border border-gray-200 h-[50px] w-[50px] rounded flex justify-center items-center mt-2"
              >
                <div class="text-orange-800">
                  <i class="fa-solid fa-building-columns"></i>
                </div>
              </div>
              <div class="m-2 text-sm text-light"><p>Loan</p></div>
            </div>
            <div
              class="border border-gray-200 h-[100px] w-[90px] rounded-lg flex flex-col justify-center items-center mt-2"
            >
              <div
                class="border border-gray-200 h-[50px] w-[50px] rounded flex justify-center items-center mt-2"
              >
                <div class="text-orange-500">
                  <i class="fa-solid fa-gift"></i>
                </div>
              </div>
              <div class="m-2 text-sm text-light"><p>Gift</p></div>
            </div>
          </div>
        </div>
      </div>
      <!-- side -->
      <div class="relative go jcc">
        <div
          class="h-[350px] border w-[700px] p-3 rounded-2xl mt-[-44px] bg-white chan"
        >
          <div class="flex justify-between py-5 gap-2 fcol">
            <div class="border w-1/2 p-2 flex justify-between rounded-2xl wf">
              <div class="fcol">
                <h1>Total credit Amount</h1>
                <h1 class="font-bold">
                  NGN. <span class="text-xl font-black">4,000,000.56</span>
                </h1>
              </div>
              <div
                class="text-green-600 py-3 px-4 bg-gray-200 text-xl rounded-2xl"
              >
                <i class="fa-solid fa-paper-plane"></i>
              </div>
            </div>
            <div class="border w-1/2 flex justify-between p-2 rounded-2xl wf">
              <div>
                <h1 class="text-sm font-gray">Total debit Amount</h1>
                <h1 class="font-bold">
                  NGN. <span class="text-xl font-black">800,000.00</span>
                </h1>
              </div>
              <div
                class="text-red-500 py-3 px-4 bg-gray-200 text-xl rounded-2xl"
              >
                <i
                  class="fa-solid fa-paper-plane"
                  style="transform: rotate(180deg)"
                ></i>
              </div>
            </div>
          </div>

          <div class="border p-3 rounded-2xl">
            <div class="flex justify-between">
              <div class="">
                <h1 class="font-bold">Transaction flow</h1>
                <div class="flex gap-3">
                  <div>
                    <input type="radio" checked name="credit" class="" />
                    <label for="credit"> credit</label>
                  </div>
                  <div class="">
                    <input type="radio" checked name="debit" class="" />
                    <label for="debit"> debit</label>
                  </div>
                </div>
              </div>
              <div class="px-2 h-[fit-content] mt-[13px] bg-gray-200">
                January, 2024
              </div>
            </div>
            <div>
              <div class="flex justify-between">
                <label for="cred" class="text-sm">Credit transaction</label>
                <h1 class="text-green-500 text-sm">N4,000,000</h1>
              </div>

              <div class="w-full h-2 rounded-lg bg-gray-200">
                <div class="w-2/3 bg-green-500 h-2 rounded-lg"></div>
              </div>

              <br />
              <div class="flex justify-between">
                <label for="cred" class="text-sm">Debit transactions</label>
                <h1 class="text-red-500 text-sm">N800,500</h1>
              </div>
              <div class="w-full h-2 rounded-lg bg-gray-200">
                <div class="w-1/3 bg-red-500 h-2 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- part2 -->
        <div
          class="p-2 w-[700px] h-[350px] mt-[57px] border rounded-2xl py-10 wid"
        >
          <div class="flex justify-between">
            <h1 class="font-bold">Trasaction flow</h1>
            <div class="flex gap-2">
              <div>filter <i class="fa-solid fa-sliders"></i></div>
              <button class="text-green-500">See all</button>
            </div>
          </div>

          <div class="flex justify-around mt-2 border p-2 bg-blue-50">
            <div>Recipient</div>
            <div>Amount</div>
            <div>Type</div>
            <div>Date & time</div>
          </div>
          <div class="flex justify-around mt-2 border p-2">
            <div>
              <i class="fa-solid fa-user-large"></i> &nbsp; Salisu Taiwo
            </div>
            <div>NGN 2,000,000</div>
            <div>credit</div>
            <div>Jan 22, 2023| 03:47PM</div>
          </div>
          <div class="flex justify-around mt-2 border p-2">
            <div>
              <i class="fa-solid fa-user-large"></i> &nbsp; Ahmed Buhari
            </div>
            <div>NGN 500,000</div>
            <div>Debit</div>
            <div>Jan 22, 2023| 03:47PM</div>
          </div>
          <div class="flex justify-around mt-2 border p-2">
            <div><i class="fa-solid fa-user-large"></i> &nbsp; Sanusi John</div>
            <div>NGN 26,000</div>
            <div>Debit</div>
            <div>Jan 22, 2023| 03:47PM</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.green {
  background-image: url("@/assets/images/background.jpeg");
}
.white {
  background-image: url("@/assets/images/background2.jpeg");
}

@media (max-width: 760px) {
  .rely {
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
    width: 100%;
    height: 70vh;
    position: relative;
   
  }
  .dnon {
    display: none;
  }
  .fcol {
    width: 80vw;
    position: relative;
    justify-content: center;
    flex-direction: column;
    
  }
  .wid {
    display: none;
  }
  .pol {
    position: absolute;
    right: 40px;
    width: 80vw;
    justify-content: center;
  }
  .red {
    right: -110px;
    width: 90vw;
    top: -45px;
  }
  .chan {
    width: 90vw;
    justify-content: center;
    display: flex;
    height: fit-content;
    margin-left: 20px;
    flex-direction: column;
    margin-top: -650px;
  }
  .wf {
    width: 100%;
  }
  .jcc {
    justify-content: center;
    width: 90vw;
    margin-right: 19px;
  }
  .white {
    /* padding-bottom: 20px; */
    top: 3px;
  }
  .go{
    position: absolute;
    top: 900px;
  }
  /* .mmt{
    top: -60px;
  } */
}
</style>

<script>
export default {
  name: "Test",
  created() {},
  components: {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
