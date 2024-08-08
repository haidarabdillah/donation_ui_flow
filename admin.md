
login tanpa register

1. dashboard
    - total user saat ini
    - total user hari ini
    - total active user
    - ada chart pertambahan user perhari
2. user
    - list user , search by email, filter by state
        - user_id
        - email
        - created_at
        - state
    - details user
        - data users
            - user_id
            - email
            - created_at
            - state (editable)
            - withdraw_address
            - is_withdraw_address
        - balance
            - total_trade
            - claimed_trade_balance
            - pending_trade_balance
            - available_reward_balance
            - total_donation
            - is_withdraw_trade
            - is_withdraw_reff
        - history trade (table trade_transaction)
            - date
            - amount
            - price
            - currency
            - paid
            - state
            - tx_hash
        - history donasi (donation_transaction + donations <https://beta.omnixscan.com/donation-detail/1> )
            - date
            - transactions_id
            - amount
            - donasi title
            - donasi_id
            - tx_hash
            - state
        - history wd
            - amount
            - state : ['pending', 'waiting_approval', 'process', 'success', 'failed']
            - type : ['withdraw_trade', 'withdraw_reff']
            - approved_by : system
            - tx_hash
            - created_at
            - updated_at
        - history earn refferal
            - date
            - transactions_id
            - amount
            - 'type', ['trade', 'donation']
            - rerefference_transactions_idff
            - tx_hash
        - distribution list 
            ```
                [
                    {
                        "id" : 1,
                        "distribution_id" : 1,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    },
                    {
                        "id" : 2,
                        "distribution_id" : 2,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    },
                    {
                        "id" : 3,
                        "distribution_id" : 3,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    },
                    {
                        "id" : 4,
                        "distribution_id" : 4,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    },
                    {
                        "id" : 5,
                        "distribution_id" : 5,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    },
                    {
                        "id" : 6,
                        "distribution_id" : 6,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    },
                    {
                        "id" : 7,
                        "distribution_id" : 7,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    },
                    {
                        "id" : 8,
                        "distribution_id" : 8,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    },
                    {
                        "id" : 9,
                        "distribution_id" : 9,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    },
                    {
                        "id" : 10,
                        "distribution_id" : 10,
                        "user_id" : 1,
                        "is_claimed" : false,
                        "amount" : 155.8620,
                        "created_at" : "2024-08-07T04:15:12.212Z",
                        "updated_at" : "2024-08-07T04:15:12.212Z"
                    }
                ]
            ```
3. halaman trade
    - dashboard trade
        - total penjualan (mrg)
        - total pendapatan (bnb)
        - total pendapatan (usdt)
        - sisa suply untuk dijual
    - trade_settings (editable)
        - sample data

         ```
          {
          token_name: 'Moringa',
          token_symbol: 'MRG',
          minimum_buy: 100,
          enable_reff_buy: true,
          price_usdt: 0.1,
          price_bnb: 0.00018,
          reff_reward: 5,
          total_sold: 500000,
          total_supply: 100000000,
          start_at: '2024-08-01',
          end_at: '2024-12-31',
          is_started: true
        }
        ```

    - history trade user
    - distribution_list (editable ketika is_ended dati trade_setting = false)
        ```
                {
            "id" : 1,
            "token_name" : "Moringa",
            "token_symbol" : "MRG",
            "minimum_buy" : 100.00,
            "enable_reff_buy" : true,
            "price_usdt" : 0.1000,
            "price_bnb" : 0.0002,
            "reff_reward" : 5,
            "total_sold" : 500000.0000,
            "total_supply" : 100000000.0000,
            "start_at" : "2024-08-01",
            "end_at" : "2024-12-31",
            "is_started" : true,
            "is_ended" : false,
            "created_at" : "2024-08-07T04:15:12.245Z",
            "updated_at" : "2024-08-07T04:15:12.245Z"
            }
        ```
4. halaman donasi
    - create new donasion = 1 hot wallet / pool wallet
    - donation details
        - history donasi
    - list donasi
    - history donasi
5. settings (editable)
    - list key:value
        - block_height: angka
    - tx checker (mengecek tx id yang tidak success oleh users) : tx_checker
6. admin wallet (editable)
    - hot_wallet (non editable), balance usdt, balance mrg, balance bnb
    - fee_wallet (non editable), balance usdt, balance mrg, balance bnb
