import Test.Hspec
import Test.QuickCheck
import Control.Exception (evaluate)

f :: Int -> Int -> Int
f a b = a*b

data Employee = Employee { name :: String,
                           pay :: Int
                         }
giveRaise :: Employee -> Double -> Employee
giveRaise e r = Employee (name e) ((pay e) * 2) 

main :: IO()
main = hspec $ do
  describe "positive numbers" $ do
    it "2, 3" $ do
       f 2 3 `shouldBe` (6 :: Int)

    it "" $ do
     2  `shouldBe` 3
