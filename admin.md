
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
            - state
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
3. halaman trade
    - dashboard trade
        - total penjualan (mrg)
        - total pendapatan (bnb)
        - total pendapatan (usdt)
        - sisa suply untuk dijual
    - setting
    - history trade user
    - distribution_list
4. halaman donasi
    - list donasi
    - history donasi
5. settings
    - list key:value
        - block_height: angka
6. admin wallet
    - hot_wallet (non editable)
    - hot_private_key (editable)
    - fee_wallet (non editable)
    - fee_private_key (editable)
