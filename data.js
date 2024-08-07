exports.up = function (knex) {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .createTable('users', function (table) {
      table.increments('id').primary();
      table.uuid('uid').unique().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.enu('role', ['user', 'admin']).defaultTo('user');
      table.enu('state', ['pending', 'process', 'active', 'banned']).defaultTo('pending');
      table.string('reff_code').notNullable().unique();
      table.integer('upline_id').notNullable().defaultTo(1);
      table.string('withdraw_address', 42).notNullable().defaultTo('');
      table.boolean('is_withdraw_address').defaultTo(false);
      table.timestamps(true, true);
    })
    .createTable('balance_user', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().unique();
      table.foreign('user_id').references('id').inTable('users');
      table.decimal('total_trade', 18, 8).notNullable().defaultTo(0.0);
      table.decimal('claimed_trade_balance', 18, 8).notNullable().defaultTo(0.0);
      table.decimal('pending_trade_balance', 18, 8).notNullable().defaultTo(0.0);
      table.decimal('available_reward_balance', 18, 8).notNullable().defaultTo(0.0);
      table.decimal('total_donation', 18, 8).notNullable().defaultTo(0.0);
      table.decimal('lock_balance', 18, 8).notNullable().defaultTo(0.0);
      table.boolean('is_withdraw_trade').defaultTo(false);
      table.boolean('is_withdraw_reff').defaultTo(false);
      table.timestamps(true, true);
    })

    .createTable('donations', function (table) {
      table.increments('id').primary();
      table.integer('creator_id').unsigned().notNullable();
      table.foreign('creator_id').references('id').inTable('users');
      table.string('title').nullable();
      table.text('description').nullable();
      table.decimal('target_donation', 38, 4).notNullable();
      table.decimal('current_donation', 38, 4).notNullable();
      table.enu('state', ['pending', 'waiting_approval', 'process', 'approved', 'rejected']).notNullable().defaultTo('pending');
      table.string('approved_by').notNullable().defaultTo('system');
      table.string('image').notNullable();
      table.specificType('tags', 'TEXT[]');
      table.date('start_at').nullable();
      table.date('end_at').nullable();
      table.string('address', 42).notNullable();
      table.string('iv', 255).nullable();
      table.string('content', 255).nullable();
      table.timestamps(true, true);
    })
    .createTable('donation_transaction', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.uuid('user_uid').notNullable();
      table.integer('donation_id');
      table.foreign('donation_id').references('id').inTable('donations');
      table.decimal('amount', 38, 4).notNullable();
      table.boolean('already_share_reff').defaultTo(false);
      table.enu('state', ['pending', 'waiting_approval', 'process', 'success', 'failed']).notNullable().defaultTo('pending');
      table.string('approved_by').notNullable().defaultTo('system');
      table.string('tx_hash').nullable();
      table.timestamps(true, true);
    })
    .createTable('mailer_codes', function (table) {
      table.increments('id').primary();
      table.string('email').notNullable();
      table.string('code').notNullable();
      table.enu('state', ['pending', 'sended', 'activate', 'expired']).defaultTo('pending');
      table.timestamps(true, true);
    })
    .createTable('mailer_reset_codes', function (table) {
      table.increments('id').primary();
      table.string('email').notNullable();
      table.uuid('code').unique().notNullable().defaultTo(knex.raw('uuid_generate_v4()'));
      table.enu('state', ['pending', 'sended', 'activate', 'expired']).defaultTo('pending');
      table.timestamps(true, true);
    })
    .createTable('settings', function (table) {
      table.increments('id').primary();
      table.string('key').unique().notNullable();
      table.string('value');
      table.timestamps(true, true);
    })
    .createTable('admin_wallet', function (table) {
      table.increments('id').primary();
      table.string('address', 42).notNullable();
      table.enu('type', ['hot', 'fee', 'hot_binance']).unique().notNullable();
      table.decimal('bnb_balance', 38, 4).notNullable().defaultTo(0);
      table.decimal('usdt_balance', 38, 4).notNullable().defaultTo(0);
      table.string('iv', 255).nullable();
      table.string('content', 255).nullable();
      table.timestamps(true, true);
    })
    .createTable('user_address', function (table) {
      table.increments('id').primary();
      table.string('address', 42).notNullable();
      table.enu('type', ['trade', 'donation']).notNullable();
      table.string('iv', 255).nullable();
      table.string('content', 255).nullable();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('donation_id');
      table.foreign('donation_id').references('id').inTable('donations');
      table.timestamps(true, true);
    })
    .createTable('trade_transaction', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.uuid('user_uid').notNullable();
      table.decimal('price', 38, 4).notNullable();
      table.decimal('amount', 38, 4).notNullable();
      table.enu('currency', ['bnb', 'usdt']).notNullable().defaultTo('bnb');
      table.decimal('paid', 38, 4);
      table.boolean('already_share_reff').defaultTo(false);
      table.enu('state', ['pending', 'waiting_approval', 'process', 'success', 'failed']).notNullable().defaultTo('pending');
      table.string('approved_by').notNullable().defaultTo('system');
      table.string('tx_hash').nullable();
      table.timestamps(true, true);
    })
    .createTable('tx_checker', function (table) {
      table.increments('id').primary();
      table.enu('state', ['pending', 'waiting_approval', 'process', 'success', 'failed']).notNullable().defaultTo('pending');
      table.string('tx_hash').nullable();
      table.timestamps(true, true);
    })
    .createTable('withdrawal_history', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.decimal('amount', 38, 4).notNullable();
      table.enu('state', ['pending', 'waiting_approval', 'process', 'success', 'failed']).notNullable().defaultTo('pending');
      table.enu('type', ['withdraw_trade', 'withdraw_reff']).notNullable().defaultTo('withdraw_trade');
      table.string('approved_by').notNullable().defaultTo('system');
      table.string('tx_hash').nullable();
      table.timestamps(true, true);
    })
    .createTable('reff_earn', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('refference_transactions_id').notNullable();
      table.integer('downline_id').unsigned().notNullable();
      table.foreign('downline_id').references('id').inTable('users');
      table.enu('type', ['trade', 'donation']).notNullable();
      table.decimal('amount', 38, 4).notNullable();
      table.boolean('is_claimed').defaultTo(false);
      table.timestamps(true, true);
    })
    .createTable('trade_settings', function (table) {
      table.increments('id').primary();
      table.string('token_name').notNullable();
      table.string('token_symbol').notNullable();
      table.decimal('minimum_buy', 10, 2).notNullable();
      table.boolean('enable_reff_buy').defaultTo(false);
      table.decimal('price_usdt', 38, 4).notNullable();
      table.decimal('price_bnb', 38, 4).notNullable();
      table.integer('reff_reward').notNullable();
      table.decimal('total_sold', 38, 4).notNullable();
      table.decimal('total_supply', 38, 4).notNullable();
      table.date('start_at').nullable();
      table.date('end_at').nullable();
      table.boolean('is_started').defaultTo(false);
      table.boolean('is_ended').defaultTo(false);
      table.timestamps(true, true);
    })

    .createTable('tags', function (table) {
      table.increments('id').primary();
      table.string('name_tag').nullable();
      table.timestamps(true, true);
    })

    .createTable('distribution', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.decimal('percentage', 38, 4).notNullable();
      table.date('start_at').nullable();
      table.boolean('is_claimed').defaultTo(false);
      table.boolean('is_distributed').defaultTo(false);
      table.timestamps(true, true);
    })
    .createTable('user_distribution', function (table) {
      table.increments('id').primary();
      table.integer('distribution_id').unsigned().notNullable();
      table.foreign('distribution_id').references('id').inTable('distribution');
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
      table.boolean('is_claimed').defaultTo(false);
      table.decimal('amount', 38, 4).notNullable();
      table.timestamps(true, true);
    })
    .createTable('volunter', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable().unique();
      table.foreign('user_id').references('id').inTable('users');
      table.string('location').notNullable();
      table.string('manager').notNullable();
      table.text('description').notNullable();
      table.text('website').notNullable();
      table.string('email').notNullable();
      table.string('contact_person').notNullable();
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('tags')
    .dropTableIfExists('tx_checker')
    .dropTableIfExists('donation_transaction')
    .dropTableIfExists('user_address')
    .dropTableIfExists('user_distribution')
    .dropTableIfExists('volunter')
    .dropTableIfExists('mailer_reset_codes')
    .dropTableIfExists('distribution')
    .dropTableIfExists('reff_earn')
    .dropTableIfExists('trade_settings')
    .dropTableIfExists('balance_user')
    .dropTableIfExists('trade_transaction')
    .dropTableIfExists('admin_wallet')
    .dropTableIfExists('settings')
    .dropTableIfExists('mailer_codes')
    .dropTableIfExists('donations')
    .dropTableIfExists('users');
};
