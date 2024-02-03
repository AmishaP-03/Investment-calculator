A react powered investment calculator which can be used to calculate future values for the given investment parameters.

Required investment parameters to compute ROI:

1. Initial investment -> Amount invested in the beginning/lumpsum
2. Annual investment -> Amount that the user intends to invest annually
3. Expected return -> Expected annual rate of return
4. Duration -> Time period (in years) for which the user intends to hold their investment

The result is computed based on the above input parameters and is displayed in a tabular format whose content are:

1. Year -> Year of investment
2. Investment value -> Current net worth
3. Interest (for the current year) -> Rate of interest earned in the current year
4. Total interest -> Total interest earned till now
5. Investment capital -> Total amount invested till now

Limitation: Duration should be greater than or equal to 1 year. Otherwise, there will be an error message displayed instead of the results table.

Screenshots:

Investment results displayed in a table when the entered duration was >= 1

![image](https://github.com/AmishaP-03/Investment-calculator/assets/154746893/0119bd16-df09-4188-bf5e-47f9828b32e6)

Error fallback message displayed when the entered duration was < 1

![image](https://github.com/AmishaP-03/Investment-calculator/assets/154746893/1f80885f-b1c8-4881-acdc-1d0806086e05)
