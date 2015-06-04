class Liquor_Bottle
  attr_reader :size, :name, :category, :size_unit, :ounce_size

  def initialize(name, category, size, size_unit)
    @acceptable_sizes = ["ml", "oz", "L"]
    @name = name
    @category = category
    @size = size
    @size_unit = size_unit
    raise ArgumentError.new("Not an approved size unit") unless @acceptable_sizes.include?(@size_unit)
    set_ounce_size
  end

  def set_ounce_size
    case @size_unit
    when "ml"
      @ounce_size = size * 0.033814
    when "L"
      @ounce_size = size * 0.000033814
    else
      @ounce_size = size
    end
  end

  def describe
    puts "#{name} #{category} - #{size}#{size_unit}"
    puts "(#{ounce_size} ounces)" if size_unit != "oz"
  end

end

bulleit = Liquor_Bottle.new("Bulleit", "Bourbon", 750, "ml")
bulleit.describe